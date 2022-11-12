<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { baseStore } from './store/base/baseStore';

const store = baseStore();
var currentRoute = computed(() => { return useRoute() }).value;

watch(currentRoute, (newVal) => { store.setCurrentRoute(newVal); })
</script>
		
<template>
	<v-app>
		<v-app-bar app
				   color="primary"
				   dark
				   v-if="store.showAppBar">
			<v-toolbar-title>Her skal der være en lækker titel!</v-toolbar-title>
		</v-app-bar>
		<v-main color="primary"
				dark>
			<router-view style="height: 100%;" />
		</v-main>
	</v-app>
</template>
