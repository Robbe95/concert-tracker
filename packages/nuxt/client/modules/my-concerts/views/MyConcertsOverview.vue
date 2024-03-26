<script setup lang="ts">
interface Props {
  concerts: any[]
}

defineProps<Props>()
</script>

<template>
  <div>
    {{ concerts }}
  </div>
</template>
