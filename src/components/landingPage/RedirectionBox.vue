<script setup lang="ts">
import { baseStore } from '@/store/base/baseStore';
import { computed } from 'vue';
import { RoutePath } from '@/models/enums/RoutePath'


interface Props {
    headLine: string,
    summaryText: string,
    imagePath?: string,
    nagivationPath: RoutePath,
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
                @click="store.NavigateToView(componentProps.nagivationPath)">

            <v-img v-if="imagePath"
                   class="flex-center"
                   :src="componentProps.imagePath">
                <p class="text-center text-xl-h4">{{ componentProps.headLine }}</p>
            </v-img>

            <v-sheet v-else
                     color="primary-lighten-1"
                     class="flex-center height-250p">
                <p class="text-center text-xl-h4">{{ componentProps.headLine }}</p>
            </v-sheet>

            <v-expand-transition>
                <div v-if="isHovering"
                     class="d-flex transition-fast-in-fast-out v-card-overlay padding-x-10p"
                     :style="{ height: summaryHeight }">
                    {{ componentProps.summaryText }}
                </div>
            </v-expand-transition>
        </v-card>
    </v-hover>
</template>