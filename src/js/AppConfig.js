const env = import.meta.env || {};

function parseBoolean(value, fallback = false) {
    if (value == null) {
        return fallback;
    }

    const normalized = String(value).trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "yes";
}

const AppConfig = {
    ws63Mode: parseBoolean(env.VITE_WS63_MODE, false),
    wifiWsPath: env.VITE_WIFI_WS_PATH || "",
    wifiWsHost: env.VITE_WIFI_WS_HOST || "",
};

export default AppConfig;
