<script setup lang="ts">
interface Props {
    headLine: string,
    summaryText: string,
    imagePath: string
}

const props = defineProps<Props>();
</script>

<template>
    <v-card class="margin-x-20p width-20vw">
        <v-img class="align-items-center"
               :src="props.imagePath">
            <v-card-title class="text-center text-xl-h4">{{ props.headLine }}</v-card-title>
        </v-img>
    </v-card>
</template>

<style scoped>

</style>