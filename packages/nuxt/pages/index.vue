<script setup lang="ts">
import { getConcertsByUserId } from '~/api/concerts/getConcertsByUserIdQuery'
import { getConcertsQuery } from '~/api/concerts/getConcertsQuery'

const data = await getConcertsByUserId()
const allData = await getConcertsQuery()

definePageMeta({
  middleware: 'auth-middleware',
  title: 'Concerts',
})
</script>

<template>
  <div>
    {{ data }}
    {{ allData }}
  </div>
</template>
