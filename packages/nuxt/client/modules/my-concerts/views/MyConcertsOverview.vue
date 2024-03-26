<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'
import { useForm } from 'formango'

import type { Concert } from '~/shared/models/concert.model'
import { concertCreateInput } from '~/shared/models/concertCreate.model'
import { base64Util } from '~/shared/utils/base64'

import { useCreateConcertMutation } from '../api/mutations/createConcertMutation'

interface Props {
  concerts: Concert[]
}

defineProps<Props>()

const { t } = useI18n()

const createConcert = useCreateConcertMutation()
const { form, onSubmitForm } = useForm({
  schema: concertCreateInput,
})

const name = form.register('name')
const image = form.register('image')

onSubmitForm(async (data) => {
  await createConcert.mutateAsync(data)
})

async function setFile(event: Event) {
  const input = event.target as HTMLInputElement

  if (input.files == null) {
    return
  }

  const base64File = await base64Util.fileToBase64(input.files[0])

  image.setValue(base64File)
}
</script>

<template>
  <div>
    <FormInput
      v-bind="name"
      :label="t('concerts.name')"
      :placeholder="t('concerts.name')"
    />
    <input
      type="file"
      v-bind="image"
      @change="setFile"
    >
    <AppButton @click="form.submit()">
      {{ t('concerts.create') }}
    </AppButton>
  </div>
</template>
