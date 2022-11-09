<script setup lang="ts">
import RedirectionBoxVue from '@/components/landingPage/RedirectionBox.vue';
</script>

<template>
    <div class="d-flex justify-center">
        <RedirectionBoxVue :head-line="'About'"
                           :summary-text="'opsummeret tekst'"
                           :image-path="'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg'" />
        <RedirectionBoxVue :head-line="'Blog'"
                           :summary-text="'opsummeret tekst'"
                           :image-path="'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg'" />

    </div>
</template>

<style scoped>

</style>