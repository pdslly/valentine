<script setup lang="ts">
import type {VNodeRef} from "vue"
import { computed, watch, ref } from 'vue'
/* @ts-ignore */
import {highlight, languages} from "prismjs"

const props = defineProps<{ code: string }>()
const editor = ref<VNodeRef | undefined>(undefined)
const highlightCode = computed(() => highlight(props.code, languages.css, "css"))

watch(() => props.code, (code) => {
  if (code.slice(-1) === "\n" && editor.value) (editor.value as HTMLDivElement).scrollTop = 100000
})
</script>

<template>
  <div class="styleEditor" ref="editor">
    <pre v-html="highlightCode"></pre>
  </div>
</template>

<style scoped>
.styleEditor {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
