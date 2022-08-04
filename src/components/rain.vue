<script setup lang="ts">
import type {Emitter} from "mitt"
import {inject, reactive} from "vue"
/* @ts-ignore */
import RainDrop from "./raindrop.vue"

let key = 0

const bus: Emitter<{"addRaindrop": () => void}> | undefined = inject("bus")
const raindrops = reactive<number[]>([])
const removeRaindrop = (index: number) => {
  raindrops.splice(index, 1)
}

bus!.on("addRaindrop", () => {
  raindrops.push(key++)
})
</script>

<template>
  <div class="rain">
    <rain-drop v-for="(key, index) in raindrops" :key="key" :index="index" @remove="removeRaindrop"></rain-drop>
  </div>
</template>

<style scoped>
.rain {
  position: fixed;
  inset: 0;
  z-index: 10;
  pointer-events: none;
}
</style>
