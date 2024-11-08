<script setup lang="ts">
const data = ref('data')
const { width, height } = useWindowSize()
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
const { increment } = counterStore
</script>

<template>
  <main>
    <div class="text-red-700 mb-10">{{ data }}</div>
    <Button @click="increment">Click me</Button>
    <div>{{ counterStore.count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
  </main>
</template>
