<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'
import { useForm } from 'formango'

import { getSignedUploadUrlMutation } from '~/client/api/mutations/getSignedUploadUrlMutation'
import { uploadToSignedUrlMutation } from '~/client/api/mutations/uploadToSignedUrlMutation'
import type { Concert } from '~/shared/models/concerts/concert.model'
import { concertCreateInput } from '~/shared/models/concerts/concertCreate.model'

import { useCreateConcertMutation } from '../api/mutations/createConcertMutation'

interface Props {
  concerts: Concert[]
}

defineProps<Props>()

const { t } = useI18n()

const createConcert = useCreateConcertMutation()
const getSignedUrl = getSignedUploadUrlMutation()
const uploadSignedUrl = uploadToSignedUrlMutation()

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

  const signedData = await getSignedUrl.mutateAsync({
    concertId: '123',
    filename: input.files[0].name,
  })

  const uploadData = uploadSignedUrl.mutateAsync({
    file: input.files[0],
    fileData: signedData,
  })

  console.warn(uploadData)
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
~/shared/models/concerts/concert.model~/shared/models/concerts/concertCreate.model
