<template>
  <h1>{{ message }}</h1>
  <h2>{{ $t(TranslationKeys.Message) }}</h2>
  <v-btn color="blue-grey" style="color: white !important" @click="changeLanguage">
    Change language
  </v-btn>
</template>

<script setup lang='ts'>
import { LanguageType } from '@/resources/languageTypes';
import { TranslationKeys } from '@/resources/translationKeys';
import { useRootStore } from '@/store/root/rootStore';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  test: string
} defineProps<Props>();


const store = useRootStore();
const { t } = useI18n();



var message = computed(() => t(TranslationKeys.Message))
function changeLanguage() {
  store.SetLanguage(store.GetCurrentLanguage == LanguageType.DK ? LanguageType.EN : LanguageType.DK);
}
</script>
