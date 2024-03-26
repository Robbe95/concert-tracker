<script setup lang="ts">
import { onKeyDown } from '@vueuse/core'
import {
  AppButton,
  FormInput,
} from '@wisemen/vue-core'
import { useForm } from 'formango'

import { useTrpc } from '~/api/useTrpc'
import { useSupabase } from '~/server/database/supabase'
import { loginInputSchema } from '~/server/modules/auth/models/login.model'

import FormPasswordInput from '../app/input/FormPasswordInput.vue'

const localePath = useLocalePath()

const { setSession } = useTrpc()
const supabase = useSupabase()
const { t } = useI18n()
const router = useRouter()

const { form, onSubmitForm } = useForm({
  schema: loginInputSchema,
})

onKeyDown([
  'Enter',
], () => {
  void form.submit()
})

onSubmitForm(async (data) => {
  try {
    const response = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (response.data.session?.access_token == null) {
      throw new Error('No access token found in response')
    }

    setSession(response.data.session)

    router.push(localePath('/'))
  }
  catch (error) {
    form.addErrors({
      password: {
        _errors: [
          t('errors.login_failed_reason'),
        ],
      },
    })
  }
})

const email = form.register('email', 'robbevaes95@gmail.com')
const password = form.register('password', '9592569Asamaru')
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <FormInput
        v-bind="email"
        :label="t('shared.email')"
        :placeholder="t('shared.email')"
        type="email"
      />
      <FormPasswordInput
        v-bind="password"
        :label="t('shared.password')"
        :placeholder="t('shared.password')"
      />
    </div>

    <div class="flex justify-end">
      <AppButton
        class="w-full"
        @click="form.submit"
      >
        {{ t('shared.login') }}
      </AppButton>
    </div>
  </section>
</template>
