<script setup lang="ts">
import { AppButton, FormInput } from '@wisemen/vue-core'

import { getConcertsQuery } from '~/api/concerts/getConcerts'

const concerts = await getConcertsQuery()
const test = ref<string>('')
</script>

<template>
  <div>
    <AppButton>
      {{ concerts }}
    </AppButton>
    <FormInput
      v-model="test"
      :errors="{ _errors: ['error'] }"
      label="label"
      type="text"
    />
  </div>
</template>
