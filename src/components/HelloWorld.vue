<template>
<h1>{{test}}</h1>
<h2>{{$t(TranslationKeys.Message)}}</h2>
</template>

<script setup lang='ts'>
import { TranslationKeys } from '@/resources/translationKeys'
interface Props {
  test: string
}
defineProps<Props>()
</script>
