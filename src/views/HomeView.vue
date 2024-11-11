<script setup lang="ts">
const data = ref('data')
const { width, height } = useWindowSize()
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
import { Button } from '../components/ui/button'
</script>

<template>
  <main>
    <div class="text-red-700 mb-10">{{ data }}</div>
    <Button title="123" @click="increment">Click me</Button>
    <button title="123">123</button>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
  </main>
</template>
