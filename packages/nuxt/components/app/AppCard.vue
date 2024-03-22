<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

interface Props {
  description: string
  title: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4 rounded-card bg-card p-4 text-card-foreground shadow-card-shadow">
    <div>
      <AppText
        variant="subtitle"
        as="h2"
      >
        {{ props.title }}
      </AppText>
      <AppText
        variant="body"
        class="text-neutral-500"
        as="h3"
      >
        {{ props.description }}
      </AppText>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>
