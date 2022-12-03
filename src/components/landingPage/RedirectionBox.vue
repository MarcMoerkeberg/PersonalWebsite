<script setup lang="ts">
import { RoutePathEnum } from '@/models/enums/RoutePathEnum';
import { baseStore } from '@/store/base/baseStore';
import { computed } from 'vue';

interface Props {
    headLine: string,
    summaryText: string,
    imagePath: string,
    nagivationPath: RoutePathEnum,
    summaryHeightPercent?: number
}
const componentProps = defineProps<Props>();

const store = baseStore();
const summaryHeight = computed(() => componentProps.summaryHeightPercent === undefined ? '30%' : `${componentProps.summaryHeightPercent}%`).value;
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card :class="['margin-x-20p', 'width-20vw', { 'cursor-pointer': isHovering }]"
                v-bind="props"
                @click="store.navigateToView(componentProps.nagivationPath)">
            <v-img class="align-items-center"
                   :src="componentProps.imagePath">
                <v-card-title class="text-center text-xl-h4">{{ componentProps.headLine }}</v-card-title>
                <v-expand-transition>
                    <div v-if="isHovering"
                         class="d-flex transition-fast-in-fast-out v-card-overlay padding-x-10p"
                         :style="{ height: summaryHeight }">
                        {{ componentProps.summaryText }}
                    </div>
                </v-expand-transition>
            </v-img>
        </v-card>
    </v-hover>
</template>