<template>
	<v-app>
		<v-app-bar app
				   color="primary"
				   dark>
			<v-toolbar-title>Her skal der være en lækker titel!</v-toolbar-title>
		</v-app-bar>
		<v-main color="primary"
				dark>
			<router-view />
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
</script>

<style>
</style>