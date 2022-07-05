<template>
<h1>
  {{test}}
</h1>
</template>

<script setup lang='ts'>
interface Props {
  test: string
}
defineProps<Props>()
</script>
