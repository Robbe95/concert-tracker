<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'

function idFunction() {
  return useId()
}
</script>

<template>
  <ConfigProvider :use-id="idFunction">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
