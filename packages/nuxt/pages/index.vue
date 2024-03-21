<script setup lang="ts">
import { getConcertsQuery } from '~/api/concerts/getConcerts'

const concerts = await getConcertsQuery()
</script>

<template>
  <div>
    {{ concerts }}
  </div>
</template>
