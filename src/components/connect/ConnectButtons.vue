<template>
    <div class="space-y-2">

        <!-- info -->
        <div class="flex flex-col mx-auto my-auto text-gray-700 text-center">
            <div class="mb-2 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-10">
                    <rect width="256" height="256" fill="none"/>
                    <circle cx="136" cy="64" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <line x1="8" y1="128" x2="200" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <polygon points="200 96 200 160 248 128 200 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <rect x="112" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <path d="M112,64H72a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                </svg>
            </div>
            <div class="font-semibold">{{ I18n.t('connect.notConnected') }}</div>
            <div>{{ I18n.t('connect.connectDevice') }}</div>
            <div v-if="AppConfig.ws63Mode" class="text-sm mt-1">{{ I18n.t('connect.ws63Hint') }}</div>
        </div>

        <!-- bluetooth -->
        <button v-if="!AppConfig.ws63Mode" @click="connectViaBluetooth" type="button" class="w-full flex cursor-pointer bg-white rounded shadow px-3 py-2 text-black space-x-2 font-semibold hover:bg-gray-100">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6">
                    <rect width="256" height="256" fill="none"/>
                    <polygon points="128 32 192 80 128 128 128 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <polygon points="128 128 192 176 128 224 128 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <line x1="64" y1="80" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <line x1="64" y1="176" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                </svg>
            </span>
            <span>{{ I18n.t('connect.connectBluetooth') }}</span>
        </button>

        <!-- serial -->
        <button v-if="!AppConfig.ws63Mode" @click="connectViaSerial" type="button" class="w-full flex cursor-pointer bg-white rounded shadow px-3 py-2 text-black space-x-2 font-semibold hover:bg-gray-100">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6">
                    <rect width="256" height="256" fill="none"/>
                    <circle cx="136" cy="64" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <line x1="8" y1="128" x2="200" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <polygon points="200 96 200 160 248 128 200 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <rect x="112" y="168" width="48" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                    <path d="M112,64H72a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                </svg>
            </span>
            <span>{{ I18n.t('connect.connectSerial') }}</span>
        </button>

        <!-- wifi -->
        <div class="w-full bg-white rounded shadow px-3 py-2 space-y-2">
            <div class="text-sm font-semibold text-gray-700">{{ I18n.t('connect.connectWifi') }}</div>
            <input
                v-model="wifiUrl"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                :placeholder="I18n.t('connect.wifiPlaceholder')"/>
            <div v-if="AppConfig.ws63Mode" class="text-xs text-gray-500">{{ I18n.t('connect.ws63DefaultUrl', { value: defaultWifiUrl }) }}</div>
            <button
                @click="connectViaWifi"
                :disabled="!wifiUrl"
                type="button"
                class="w-full flex cursor-pointer rounded px-3 py-2 text-white space-x-2 font-semibold"
                :class="[ wifiUrl ? 'bg-blue-500 hover:bg-blue-400' : 'bg-gray-400 cursor-not-allowed' ]">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6">
                        <path d="M12 18.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" />
                        <path fill-rule="evenodd" d="M2.25 8.847a12.94 12.94 0 0 1 19.5 0 .75.75 0 1 1-1.13.987 11.44 11.44 0 0 0-17.24 0 .75.75 0 1 1-1.13-.987Zm3.315 2.901a8.44 8.44 0 0 1 12.87 0 .75.75 0 0 1-1.144.97 6.94 6.94 0 0 0-10.582 0 .75.75 0 1 1-1.144-.97Zm3.332 2.909a3.94 3.94 0 0 1 6.206 0 .75.75 0 0 1-1.183.922 2.44 2.44 0 0 0-3.84 0 .75.75 0 0 1-1.183-.922Z" clip-rule="evenodd" />
                    </svg>
                </span>
                <span>{{ I18n.t('connect.connectWifiNow') }}</span>
            </button>
            <div class="text-xs text-gray-500">{{ I18n.t('connect.wifiHint') }}</div>
        </div>

    </div>
</template>

<script>
import Connection from "../../js/Connection.js";
import I18n from "../../js/I18n.js";
import AppConfig from "../../js/AppConfig.js";

export default {
    name: 'ConnectButtons',
    data() {
        return {
            wifiUrl: localStorage.getItem("wifi_connection_url") ?? Connection.getDefaultWifiUrl(),
        };
    },
    methods: {
        async connectViaBluetooth() {
            if(await Connection.connectViaBluetooth()){
                this.$router.push({
                    name: "main",
                });
            }
        },
        async connectViaSerial() {
            if(await Connection.connectViaSerial()){
                this.$router.push({
                    name: "main",
                });
            }
        },
        async connectViaWifi() {
            localStorage.setItem("wifi_connection_url", this.wifiUrl);
            if(await Connection.connectViaWifi(this.wifiUrl)){
                this.$router.push({
                    name: "main",
                });
            }
        },
    },
    computed: {
        I18n() {
            return I18n;
        },
        AppConfig() {
            return AppConfig;
        },
        defaultWifiUrl() {
            return Connection.getDefaultWifiUrl();
        },
    },
}
</script>
