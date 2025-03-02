<template>
  <div class="flex flex-col items-center justify-center mt-3 w-full gap-4">
    <div class="flex flex-row items-center justify-center w-full gap-4">
      <h1 class="text-2xl font-bold text-sky-500">From Vue {{ result }}</h1>
      <Tag v-tooltip="'New'" severity="success" value="New" />
    </div>
    <Button label="Click" @click="handleClick" />
  </div>
  <Toast />
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useAPI } from '~/composables/api'
import { ref } from 'vue'

let api = useAPI()
let result = ref<string>('')

let toast = useToast()
async function handleClick() {
  try {
    let q = await api.foo.hello.query()
    result.value = q.message
    toast.add({ severity: 'success', summary: 'Success', detail: 'Success', life: 5000 })
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error', detail: `${error}`, life: 5000 })
  }
}
</script>
