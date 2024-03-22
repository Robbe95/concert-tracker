<script setup lang="ts">
import { getConcertsQuery } from '~/api/concerts/getConcerts'

await getConcertsQuery()
definePageMeta({
  middleware: 'auth-middleware',
  title: 'Concerts',
})
</script>

<template>
  <div />
</template>
