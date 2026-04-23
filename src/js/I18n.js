import { reactive } from "vue";

const STORAGE_KEY = "meshcore.language";
const SUPPORTED_LANGUAGES = ["en", "zh"];

const messages = {
    en: {
        lang: {
            chinese: "中文",
            english: "English",
        },
        header: {
            clientName: "MeshCore Client",
            battery: "Battery {value}%",
            connecting: "Connecting...",
            builtBy: "Built by",
            connect: "Connect",
            disconnect: "Disconnect",
            advertZeroHop: "Advert (Zero Hop)",
            advertFlood: "Advert (Flood Routed)",
            zeroHopSent: "A zero hop advert has been sent.",
            floodSent: "A flood routed advert has been sent.",
        },
        main: {
            contacts: "Contacts",
            channels: "Channels",
            unsupportedContactType: "Messaging this contact type is not supported.",
        },
        connect: {
            notConnected: "Not Connected",
            connectDevice: "Connect a MeshCore device to continue",
            legacyNotice: "This web client is no longer maintained.",
            useNewApp: "Please use the new app:",
            connectBluetooth: "Connect via Bluetooth",
            connectSerial: "Connect via Serial",
        },
        page: {
            connect: "Connect",
            connectSubtitle: "Select a Connection Method",
            directMessages: "Direct Messages",
            channelMessages: "Channel Messages",
            rxLog: "RX Log",
            settings: "Settings",
        },
        common: {
            unknownContact: "Unknown Contact",
            unknownChannel: "Unknown Channel",
            thisDevice: "(this device)",
        },
        contactsList: {
            search: "Search {count} {label}...",
            labelContact: "Contact",
            labelContacts: "Contacts",
            order: "Order",
            orderAz: "A-Z",
            orderHeardRecently: "Heard Recently",
            filter: "Filter",
            filterAll: "All",
            filterUsers: "Users",
            filterRepeaters: "Repeaters",
            emptyTitle: "No Contacts",
            emptyBody: "If someone Adverts, they will show up here.",
        },
        channelsList: {
            emptyTitle: "No Channels",
            emptyBody: "Add an encrypted channel to send broadcast messages.",
        },
        contact: {
            noPathFlood: "No Path (Flood)",
            direct: "Direct",
            oneHop: "1 Hop",
            manyHops: "{count} Hops",
        },
        contactMenu: {
            copyPublicKey: "Copy Public Key",
            shareZeroHop: "Share (Zero Hop Advert)",
            exportToClipboard: "Export to Clipboard",
            resetPath: "Reset Path",
            deleteMessageHistory: "Delete Message History",
            forgetContact: "Forget Contact",
            adverted: "Contact has been adverted!",
            shareFailed: "Failed to share this contact!",
            exportFailed: "Failed to export this contact!",
            resetPathConfirm: "Are you sure you want to reset the path to this contact?",
            deleteHistoryConfirm: "Are you sure you want to delete all message history with this contact?",
            forgetConfirm: "Are you sure you want to forget this contact?",
        },
        channelMenu: {
            deleteMessageHistory: "Delete Message History",
            deleteHistoryConfirm: "Are you sure you want to delete all message history for this channel?",
        },
        save: {
            saving: "Saving...",
            save: "Save",
        },
        message: {
            failedWithError: "Failed: {error}",
            retry: "Retry?",
            delivered: "Delivered",
            sending: "Sending",
            placeholder: "Send a message...",
            send: "Send",
            notConnected: "Not connected to device",
            sendFailed: "Failed to send message",
            sentAt: "Sent: {value}",
            receivedAt: "Received: {value}",
            rtt: "RTT: {value}ms",
        },
        rxlog: {
            search: "Search {count} {label}...",
            labelLog: "Log",
            labelLogs: "Logs",
            path: "Path: {value}",
            pathDirect: "Path: (direct)",
            hops: "Hops: {value}",
            snr: "SNR: {value}",
            hash: "Hash: {value}",
            decodeFailed: "Failed to decode packet",
            pathHops: "{count} Hops",
            pathItem: "[{index}]: {name}",
            source: "Source: {value}",
            dest: "Dest: {value}",
            publicKey: "Public Key: <{value}>",
            parseAdvertFailed: "Failed to parse Advert",
        },
        time: {
            unknown: "Unknown",
            now: "now",
            yearAgo: "{count} year ago",
            yearsAgo: "{count} years ago",
            monthAgo: "{count} month ago",
            monthsAgo: "{count} months ago",
            weekAgo: "{count} week ago",
            weeksAgo: "{count} weeks ago",
            dayAgo: "{count} day ago",
            daysAgo: "{count} days ago",
            hourAgo: "{count} hour ago",
            hoursAgo: "{count} hours ago",
            minAgo: "{count} min ago",
            minsAgo: "{count} mins ago",
        },
        settings: {
            firmwareBuildDate: "Firmware Build Date: {value}",
            publicInfo: "Public Info",
            name: "Name",
            latitude: "Latitude",
            longitude: "Longitude",
            radioSettings: "Radio Settings",
            frequency: "Frequency (MHz)",
            bandwidth: "Bandwidth",
            spreadingFactor: "Spreading Factor",
            codingRate: "Coding Rate",
            txPower: "Transmit Power (dBm)",
            commands: "Commands",
            reboot: "Reboot",
            nameRequired: "Name is required!",
            frequencyRequired: "Frequency is required!",
            bandwidthRequired: "Bandwidth is required!",
            spreadingFactorRequired: "Spreading Factor is required!",
            codingRateRequired: "Coding Rate is required!",
            txPowerRequired: "Transmit Power is required!",
            saved: "Settings saved.",
            saveFailed: "Failed to save settings!",
            rebootConfirm: "Are you sure you want to reboot this device?",
            rebootFailed: "Failed to reboot device!",
            rebooting: "Device is rebooting. You will need to reconnect!",
            namePlaceholder: "e.g: Anonymous",
            latitudePlaceholder: "e.g: -38.664646",
            longitudePlaceholder: "e.g: 178.023507",
            frequencyPlaceholder: "e.g: 917.375",
            txPowerPlaceholder: "e.g: 22",
        },
        utils: {
            clipboardNotSupported: "Clipboard not supported. Site must be served via https on iOS.",
            copiedToClipboard: "Copied to clipboard!",
        },
        connection: {
            failedBle: "Failed to connect to BLE device!",
            failedSerial: "Failed to connect to serial device!",
            publicChannelName: "Public Channel",
            publicChannelDescription: "This is the default public channel.",
        },
    },
    zh: {
        lang: {
            chinese: "中文",
            english: "English",
        },
        header: {
            clientName: "MeshCore 客户端",
            battery: "电量 {value}%",
            connecting: "连接中...",
            builtBy: "开发者",
            connect: "连接",
            disconnect: "断开连接",
            advertZeroHop: "广播（零跳）",
            advertFlood: "广播（泛洪路由）",
            zeroHopSent: "已发送零跳广播。",
            floodSent: "已发送泛洪路由广播。",
        },
        main: {
            contacts: "联系人",
            channels: "频道",
            unsupportedContactType: "暂不支持与该联系人类型发送消息。",
        },
        connect: {
            notConnected: "未连接",
            connectDevice: "连接 MeshCore 设备以继续",
            legacyNotice: "该网页版客户端已不再维护。",
            useNewApp: "请使用新应用：",
            connectBluetooth: "通过蓝牙连接",
            connectSerial: "通过串口连接",
        },
        page: {
            connect: "连接",
            connectSubtitle: "选择连接方式",
            directMessages: "私聊消息",
            channelMessages: "频道消息",
            rxLog: "接收日志",
            settings: "设置",
        },
        common: {
            unknownContact: "未知联系人",
            unknownChannel: "未知频道",
            thisDevice: "（本机）",
        },
        contactsList: {
            search: "搜索 {count} 个{label}...",
            labelContact: "联系人",
            labelContacts: "联系人",
            order: "排序",
            orderAz: "A-Z",
            orderHeardRecently: "最近听到",
            filter: "筛选",
            filterAll: "全部",
            filterUsers: "用户",
            filterRepeaters: "中继器",
            emptyTitle: "暂无联系人",
            emptyBody: "如果有人发出广播，会显示在这里。",
        },
        channelsList: {
            emptyTitle: "暂无频道",
            emptyBody: "添加加密频道以发送广播消息。",
        },
        contact: {
            noPathFlood: "无路径（泛洪）",
            direct: "直连",
            oneHop: "1 跳",
            manyHops: "{count} 跳",
        },
        contactMenu: {
            copyPublicKey: "复制公钥",
            shareZeroHop: "分享（零跳广播）",
            exportToClipboard: "导出到剪贴板",
            resetPath: "重置路径",
            deleteMessageHistory: "删除消息记录",
            forgetContact: "忘记联系人",
            adverted: "联系人广播已发送！",
            shareFailed: "分享该联系人失败！",
            exportFailed: "导出该联系人失败！",
            resetPathConfirm: "确定要重置到该联系人的路径吗？",
            deleteHistoryConfirm: "确定要删除与该联系人的所有消息记录吗？",
            forgetConfirm: "确定要忘记该联系人吗？",
        },
        channelMenu: {
            deleteMessageHistory: "删除消息记录",
            deleteHistoryConfirm: "确定要删除该频道的所有消息记录吗？",
        },
        save: {
            saving: "保存中...",
            save: "保存",
        },
        message: {
            failedWithError: "发送失败：{error}",
            retry: "重试？",
            delivered: "已送达",
            sending: "发送中",
            placeholder: "输入消息...",
            send: "发送",
            notConnected: "设备未连接",
            sendFailed: "发送消息失败",
            sentAt: "发送时间：{value}",
            receivedAt: "接收时间：{value}",
            rtt: "往返延迟：{value}ms",
        },
        rxlog: {
            search: "搜索 {count} 条{label}...",
            labelLog: "日志",
            labelLogs: "日志",
            path: "路径：{value}",
            pathDirect: "路径：（直连）",
            hops: "跳数：{value}",
            snr: "信噪比：{value}",
            hash: "哈希：{value}",
            decodeFailed: "解码数据包失败",
            pathHops: "{count} 跳",
            pathItem: "[{index}]：{name}",
            source: "来源：{value}",
            dest: "目标：{value}",
            publicKey: "公钥：<{value}>",
            parseAdvertFailed: "解析广播失败",
        },
        time: {
            unknown: "未知",
            now: "刚刚",
            yearAgo: "{count} 年前",
            yearsAgo: "{count} 年前",
            monthAgo: "{count} 个月前",
            monthsAgo: "{count} 个月前",
            weekAgo: "{count} 周前",
            weeksAgo: "{count} 周前",
            dayAgo: "{count} 天前",
            daysAgo: "{count} 天前",
            hourAgo: "{count} 小时前",
            hoursAgo: "{count} 小时前",
            minAgo: "{count} 分钟前",
            minsAgo: "{count} 分钟前",
        },
        settings: {
            firmwareBuildDate: "固件构建日期：{value}",
            publicInfo: "公开信息",
            name: "名称",
            latitude: "纬度",
            longitude: "经度",
            radioSettings: "无线电设置",
            frequency: "频率（MHz）",
            bandwidth: "带宽",
            spreadingFactor: "扩频因子",
            codingRate: "编码率",
            txPower: "发射功率（dBm）",
            commands: "命令",
            reboot: "重启",
            nameRequired: "名称不能为空！",
            frequencyRequired: "频率不能为空！",
            bandwidthRequired: "带宽不能为空！",
            spreadingFactorRequired: "扩频因子不能为空！",
            codingRateRequired: "编码率不能为空！",
            txPowerRequired: "发射功率不能为空！",
            saved: "设置已保存。",
            saveFailed: "保存设置失败！",
            rebootConfirm: "确定要重启此设备吗？",
            rebootFailed: "重启设备失败！",
            rebooting: "设备正在重启，你需要重新连接！",
            namePlaceholder: "例如：Anonymous",
            latitudePlaceholder: "例如：-38.664646",
            longitudePlaceholder: "例如：178.023507",
            frequencyPlaceholder: "例如：917.375",
            txPowerPlaceholder: "例如：22",
        },
        utils: {
            clipboardNotSupported: "不支持剪贴板。iOS 需通过 HTTPS 访问。",
            copiedToClipboard: "已复制到剪贴板！",
        },
        connection: {
            failedBle: "连接蓝牙设备失败！",
            failedSerial: "连接串口设备失败！",
            publicChannelName: "公共频道",
            publicChannelDescription: "这是默认公共频道。",
        },
    },
};

function normalizeLanguage(language) {
    if (SUPPORTED_LANGUAGES.includes(language)) {
        return language;
    }

    if (language && language.startsWith("zh")) {
        return "zh";
    }

    return "en";
}

function getByPath(object, path) {
    return path.split(".").reduce((carry, part) => {
        if (carry && Object.prototype.hasOwnProperty.call(carry, part)) {
            return carry[part];
        }
        return undefined;
    }, object);
}

function interpolate(template, params = {}) {
    return template.replace(/\{(\w+)}/g, (_, key) => {
        return params[key] !== undefined ? params[key] : `{${key}}`;
    });
}

function applyLanguageSideEffects(language) {
    if (typeof document !== "undefined") {
        document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    }
}

const initialLanguage = normalizeLanguage(
    localStorage.getItem(STORAGE_KEY) || navigator.language || "en",
);

const state = reactive({
    language: initialLanguage,
});

const I18n = {
    get language() {
        return state.language;
    },
    setLanguage(language) {
        const normalized = normalizeLanguage(language);
        state.language = normalized;
        localStorage.setItem(STORAGE_KEY, normalized);
        applyLanguageSideEffects(normalized);
    },
    toggleLanguage() {
        this.setLanguage(state.language === "en" ? "zh" : "en");
    },
    t(path, params = {}) {
        const current = getByPath(messages[state.language], path);
        const fallback = getByPath(messages.en, path);
        const output = current || fallback || path;
        if (typeof output !== "string") {
            return path;
        }
        return interpolate(output, params);
    },
};

applyLanguageSideEffects(initialLanguage);

export default I18n;
