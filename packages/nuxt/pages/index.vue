<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'

import { getConcertsQuery } from '~/api/concerts/getConcerts'
import { useTrpc } from '~/api/trpcClient'

const concerts = await getConcertsQuery()
const trpc = useTrpc()

async function loginTest() {
  await trpc.auth.login.mutate({ email: 'robbevaes95@gmail.com', password: '9592569Asamaru' })
}

void loginTest()
</script>

<template>
  <div>
    <AppButton>
      {{ concerts }}
    </AppButton>
  </div>
</template>
