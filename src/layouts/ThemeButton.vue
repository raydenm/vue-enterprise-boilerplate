<template>
  <div @click="toggleTheme" class="cursor-pointer">
    <Sun v-if="themePreference === 'dark'" />
    <Moon v-else />
  </div>
</template>

<script setup lang="ts">
import useTheme from '@/composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'
const { setTheme, themePreference } = useTheme()
function toggleTheme() {
  if (themePreference.value !== 'dark') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}
</script>
