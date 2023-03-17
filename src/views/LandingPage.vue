<script setup lang="ts">
import RedirectionBoxVue from '@/components/landingPage/RedirectionBox.vue';
import { TranslationKeys } from '@/resources/translationKeys';
import { useI18n } from 'vue-i18n';
import { Icon } from '@iconify/vue';
import { baseStore } from '@/store/base/baseStore';
import { RoutePath } from '@/models/enums/RoutePath'
import { GetSocialInformation } from '@/models/base/IconInformation';

const store = baseStore();
const { t } = useI18n();
const iconInformationForSocials = GetSocialInformation();
</script>

<template>
      <div class="vertical-center">
            <div class="d-flex justify-content-center gap-50p">
                  <RedirectionBoxVue :head-line="t(TranslationKeys.About)"
                                     :summary-text="t(TranslationKeys.AboutSummary)"
                                     :nagivation-path="RoutePath.About" />

                  <RedirectionBoxVue :head-line="t(TranslationKeys.Blog)"
                                     :summary-text="t(TranslationKeys.BlogSummary)"
                                     :nagivation-path="RoutePath.Blog" />

                  <RedirectionBoxVue :head-line="t(TranslationKeys.Contact)"
                                     :summary-text="t(TranslationKeys.ContactSummary)"
                                     :nagivation-path="RoutePath.Contact" />
            </div>

            <div class="flex-center margin-top-20p">
                  <v-hover v-for="socialInfo in iconInformationForSocials"
                           v-slot="{ isHovering, props }">
                        <Icon v-bind="props"
                              :class="['cursor-pointer', 'margin-x-10p', { 'animate-fill-secondary-color': isHovering }]"
                              :icon="socialInfo.Icon"
                              @click="store.OpenInNewTab(socialInfo.Link)"
                              width="3em" />
                  </v-hover>
            </div>
      </div>
</template>