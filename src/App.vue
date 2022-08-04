<script setup lang="ts">
import "./assets/style.css"
import "./assets/prism.min.css"

import {ref, onMounted} from "vue"
import {useIntervalFn} from "@vueuse/core"
import isPc from "./utils/isPC"
import GetStyle from "./cssTemplate"
import DrawPlane from "@/components/plane.vue"
import StyleEditor from '@/components/editor.vue'
import DrawRain from "@/components/rain.vue"

const cssTemp = GetStyle(isPc)
const code = ref<string>("")
const codeIndex = ref<number>(0)
const {pause, resume, isActive} = useIntervalFn(() => {
  code.value = cssTemp.slice(0, ++codeIndex.value)
}, 30, {immediate: false})

onMounted(() => {
  resume()
})
</script>

<template>
  <component :is="'style'" type="text/css">{{code}}</component>
  <draw-rain></draw-rain>
  <style-editor :code="code"></style-editor>
  <draw-plane></draw-plane>
</template>

<style scoped>
</style>
