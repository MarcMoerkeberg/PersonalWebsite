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
                  <Icon v-for="socialInfo in iconInformationForSocials"
                        class="cursor-pointer margin-x-10p transition-color-secondary-5s"
                        :icon="socialInfo.Icon"
                        @click="store.OpenInNewTab(socialInfo.Link)"
                        width="3em" />
            </div>
      </div>
</template>