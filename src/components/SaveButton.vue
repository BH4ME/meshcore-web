<template>
    <button :disabled="isSaving" type="button" class="text-white font-semibold px-2 py-1 rounded shadow" :class="[ isSaving ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-400' ]">
        <span v-if="isSaving">{{ I18n.t('save.saving') }}</span>
        <span v-else>{{ I18n.t('save.save') }}</span>
    </button>
</template>

<script>
import I18n from "../js/I18n.js";

export default {
    name: 'SaveButton',
    props: {
        isSaving: Boolean,
    },
    computed: {
        I18n() {
            return I18n;
        },
    },
}
</script>
