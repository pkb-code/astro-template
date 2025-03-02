<template>
  <div class="flex items-center justify-center w-full gap-4">
    <h1 class="text-2xl font-bold text-sky-500">Project Name</h1>
    <Tag v-tooltip="'New'" severity="success" value="New" />
    <Button label="Click" @click="handleClick" />
  </div>
  <Toast />
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

let toast = useToast()
async function handleClick() {
  let now = new Date()
  if (now.getSeconds() % 2 !== 0) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Error', life: 5000 })
    throw new Error('Error')
  } else {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Success', life: 5000 })
  }
}
</script>
