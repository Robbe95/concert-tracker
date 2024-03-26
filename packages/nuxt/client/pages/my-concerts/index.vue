<script setup lang="ts">
import { getConcertsByUserIdQuery } from '~/client/modules/my-concerts/api/queries/getConcertsByUserIdQuery'

definePageMeta({
  middleware: 'auth-middleware',
  title: 'Concerts',
})

const { data, suspense } = getConcertsByUserIdQuery()

await suspense()
</script>

<template>
  <MyConcertsOverview
    v-if="data != null"
    :concerts="data"
  />
</template>
