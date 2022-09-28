<template>
	<v-app>
		<v-app-bar app
				   color="primary"
				   dark
				   v-if="showAppBar">
			<v-toolbar-title>Her skal der være en lækker titel!</v-toolbar-title>
		</v-app-bar>
		<v-main color="primary"
				dark>
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { baseStore } from './store/base/baseStore';

const store = baseStore();

var currentRoute = computed(() => { return useRoute() });
var showAppBar = computed(() => { return !store.RoutesToHideAppBar.includes(currentRoute.value.path); })
</script>