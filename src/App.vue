<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { baseStore } from './store/base/baseStore';

const store = baseStore();
var currentRoute = computed(() => { return useRoute() });

watch(currentRoute.value, (newVal) => { store.setCurrentRoute(newVal); })
</script>
		
<template>
	<v-app>
		<v-app-bar app
				   color="primary"
				   v-if="store.showAppBar">
			<v-toolbar-title>Her skal der være en lækker titel!</v-toolbar-title>
		</v-app-bar>

		<v-main color="primary">
			<router-view style="height: 100%;" />
		</v-main>
	</v-app>
</template>

<style>
html {
	overflow: hidden !important;
	/* scrollbar-width: none; */
	/* -ms-overflow-style: none; */
}
</style>
