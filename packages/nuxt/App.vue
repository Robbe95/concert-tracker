<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'

function useIdFunction() {
  return useId()
}
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
