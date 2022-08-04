<script setup lang="ts">
import {ref} from "vue"
import {useTimeoutFn} from "@vueuse/core"

const emit = defineEmits(["remove"])
const props = defineProps<{index: number}>()
const {innerWidth, innerHeight} = window
const randomNumber = (min: number, max: number) => Math.round(Math.random() * (max - min) + min)
const top = ref<string>(`-30px`)
const left = ref<string>(`${randomNumber(0, innerWidth)}px`)
const endTime = ref<number>(randomNumber(2000, 6000))
const transitionDuration = ref<string>(`${endTime.value}ms`)

useTimeoutFn(() => {
  emit("remove", props.index)
}, endTime)

useTimeoutFn(() => {
  top.value = `${innerHeight + 30}px`
  left.value = `${randomNumber(0, innerWidth)}px`
}, 0)
</script>

<template>
  <span class="raindrop" :style="{top, left, transitionDuration}">❤️</span>
</template>

<style scoped>
.raindrop {
  position: absolute;
  pointer-events: none;
  font-size: 20px;
  transition-property: all;
  transition-timing-function: linear;
}
</style>
