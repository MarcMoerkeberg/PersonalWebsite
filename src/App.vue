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

var routesToHideAppBar = ['landing-page'];
var currentRoute = computed(() => { return useRoute().name });
var showAppBar = computed(() => { return currentRoute.value && !routesToHideAppBar.includes(currentRoute.value.toString()) });

</script>

<style>

</style>