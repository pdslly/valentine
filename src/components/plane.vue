<script setup lang="ts">
import type {Emitter} from "mitt"
import {inject} from "vue"

const bus: Emitter<{"addRaindrop": unknown}> | undefined = inject("bus")

const clickHandler = () => {
  bus!.emit("addRaindrop")
}
</script>

<template>
  <div class="heartWrapper">
    <div class="heart" @click="clickHandler"></div>
    <div class="heart bounce"></div>
  </div>
</template>

<style scoped>
.bounce {
  pointer-events: none;
}
</style>
