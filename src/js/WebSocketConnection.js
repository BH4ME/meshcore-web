import { Connection as MeshcoreConnection, Constants } from "@liamcottle/meshcore.js";

class WebSocketConnection extends MeshcoreConnection {

    constructor(url) {
        super();
        this.url = url;
        this.socket = null;
        this.readBuffer = [];
        this.hasConnected = false;
    }

    static async open(url) {
        const connection = new WebSocketConnection(url);
        await connection.connect();
        return connection;
    }

    async connect() {
        await new Promise((resolve, reject) => {
            let settled = false;
            const socket = new WebSocket(this.url);
            socket.binaryType = "arraybuffer";

            socket.addEventListener("open", () => {
                settled = true;
                this.socket = socket;
                this.hasConnected = true;
                this.onConnected();
                resolve();
            });

            socket.addEventListener("error", (error) => {
                if (settled) {
                    return;
                }
                settled = true;
                reject(error);
            });

            socket.addEventListener("close", () => {
                if (this.hasConnected) {
                    this.onDisconnected();
                }
            });

            socket.addEventListener("message", async (event) => {
                await this.onSocketDataReceived(event.data);
            });
        });
    }

    async onSocketDataReceived(data) {
        let bytes = null;

        if (data instanceof ArrayBuffer) {
            bytes = new Uint8Array(data);
        } else if (data instanceof Blob) {
            bytes = new Uint8Array(await data.arrayBuffer());
        } else {
            return;
        }

        this.readBuffer = [
            ...this.readBuffer,
            ...bytes,
        ];

        const frameHeaderLength = 3;
        while (this.readBuffer.length >= frameHeaderLength) {
            try {
                const frameType = this.readBuffer[0];
                const frameLength = this.readBuffer[1] | (this.readBuffer[2] << 8);

                if (frameType !== Constants.SerialFrameTypes.Incoming && frameType !== Constants.SerialFrameTypes.Outgoing) {
                    this.readBuffer = this.readBuffer.slice(1);
                    continue;
                }

                if (!frameLength) {
                    this.readBuffer = this.readBuffer.slice(1);
                    continue;
                }

                const requiredLength = frameHeaderLength + frameLength;
                if (this.readBuffer.length < requiredLength) {
                    break;
                }

                const frameData = this.readBuffer.slice(frameHeaderLength, requiredLength);
                this.readBuffer = this.readBuffer.slice(requiredLength);
                this.onFrameReceived(frameData);
            } catch (error) {
                console.error("Failed to process websocket frame", error);
                break;
            }
        }
    }

    async close() {
        try {
            this.socket?.close();
        } catch (error) {
            // ignore close errors
        }
    }

    async write(bytes) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket not connected");
        }
        this.socket.send(bytes);
    }

    async sendToRadioFrame(data) {
        const frame = new Uint8Array(3 + data.length);
        frame[0] = Constants.SerialFrameTypes.Outgoing;
        frame[1] = data.length & 0xff;
        frame[2] = (data.length >> 8) & 0xff;
        frame.set(data, 3);
        this.emit("tx", data);
        await this.write(frame);
    }

}

export default WebSocketConnection;
