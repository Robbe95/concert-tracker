<script setup lang="ts">
import { getArtistsBySearchQuery } from '~/api/artists/getArtistsBySearchQuery'
import { getConcertsByUserId } from '~/api/concerts/getConcertsByUserIdQuery'
import { getConcertsQuery } from '~/api/concerts/getConcertsQuery'

const search = ref<string>('100 gecs')
const data = await getConcertsByUserId()
const allData = await getConcertsQuery()
const artists = await getArtistsBySearchQuery(search)

definePageMeta({
  middleware: 'auth-middleware',
  title: 'Concerts',
})
</script>

<template>
  <div>
    {{ data }}
    {{ allData }}
    {{ artists }}
  </div>
</template>
