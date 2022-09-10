<template>
  <h1>{{ message }}</h1>
  <h2>{{ $t(TranslationKeys.Message) }}</h2>
  <v-btn color="blue-grey"
         style="color: white !important"
         @click="changeLanguage()">
    Change language
  </v-btn>
</template>

<script setup lang='ts'>
import { LanguageTypes } from '@/resources/languageTypes';
import { TranslationKeys } from '@/resources/translationKeys';
import { baseStore } from '@/store/base/baseStore';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  test: string
}
defineProps<Props>();



const store = baseStore();
const { t } = useI18n();



var message = computed(() => t(TranslationKeys.Message))
function changeLanguage() {
  var currlang = store.$state.Language;
  var currentLanguage = store.getCurrentCurrentLanguage;
  store.setCurrentLanguage(currentLanguage === LanguageTypes.DK ? LanguageTypes.EN : LanguageTypes.DK);
}
</script>
