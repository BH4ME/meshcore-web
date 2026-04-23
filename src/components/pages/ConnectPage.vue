<template>
    <Page>

        <!-- app bar -->
        <AppBar :title="I18n.t('page.connect')" :subtitle="I18n.t('page.connectSubtitle')"/>

        <!-- list -->
        <div class="mx-auto my-auto">
            <ConnectButtons/>
        </div>

    </Page>
</template>

<script>
import AppBar from "../AppBar.vue";
import Page from "./Page.vue";
import ConnectButtons from "../connect/ConnectButtons.vue";
import I18n from "../../js/I18n.js";

export default {
    name: 'ConnectPage',
    components: {
        ConnectButtons,
        Page,
        AppBar,
    },
    computed: {
        I18n() {
            return I18n;
        },
    },
}
</script>
