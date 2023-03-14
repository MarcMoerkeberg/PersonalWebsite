<script setup lang="ts">
import RedirectionBoxVue from '@/components/landingPage/RedirectionBox.vue';
import { RoutePathEnum } from '@/models/enums/RoutePathEnum';
import { TranslationKeys } from '@/resources/translationKeys';
import { useI18n } from 'vue-i18n';

const importedImage = require('@/assets/images/speederman.png')
const { t } = useI18n();
</script>

<template>
    <div class="flex-center gap-50p row">
        <RedirectionBoxVue :head-line="t(TranslationKeys.About)"
                           :summary-text="t(TranslationKeys.AboutSummary)"
                           :nagivation-path="RoutePathEnum.About" />

        <RedirectionBoxVue :head-line="t(TranslationKeys.Blog)"
                           :summary-text="t(TranslationKeys.BlogSummary)"
                           :nagivation-path="RoutePathEnum.Blog" />

        <RedirectionBoxVue :head-line="t(TranslationKeys.Contact)"
                           :summary-text="t(TranslationKeys.ContactSummary)"
                           :nagivation-path="RoutePathEnum.Contact" />
    </div>
</template>