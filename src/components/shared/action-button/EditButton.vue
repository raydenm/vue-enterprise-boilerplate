<template>
  <Button
    :label="label ?? 'edit'"
    icon="pi pi-pen-to-square"
    as="router-link"
    :to="link"
  />
</template>

<script setup lang="ts">
type ButtonProps = {
  label: string
  path: string
}

const { label, path } = defineProps<ButtonProps>()

const link = computed(() => (path ? { path } : ''))
</script>

<style scoped></style>
