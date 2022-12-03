<script setup lang="ts">
import RedirectionBoxVue from '@/components/landingPage/RedirectionBox.vue';
import { RoutePathEnum } from '@/models/enums/RoutePathEnum';
import { TranslationKeys } from '@/resources/translationKeys';
import { useI18n } from 'vue-i18n';

const speederman = require('@/assets/images/speederman.png')
const { t } = useI18n();
</script>

<template>
    <v-col cols="4"
           class="redirectionColumn">
        <RedirectionBoxVue :head-line="t(TranslationKeys.About)"
                           :summary-text="t(TranslationKeys.AboutSummary)"
                           :image-path="speederman"
                           :nagivation-path="RoutePathEnum.About" />
        <RedirectionBoxVue :head-line="t(TranslationKeys.Blog)"
                           :summary-text="t(TranslationKeys.BlogSummary)"
                           :image-path="'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg'"
                           :nagivation-path="RoutePathEnum.Home" />

    </v-col>
</template>

<style scoped>
.redirectionColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
</style>