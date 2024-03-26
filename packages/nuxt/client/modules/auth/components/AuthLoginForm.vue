<script setup lang="ts">
import { onKeyDown } from '@vueuse/core'
import {
  AppButton,
  FormInput,
} from '@wisemen/vue-core'
import { useForm } from 'formango'

import { useSupabaseClient } from '~/client/api/useClientSupabase'
import { useTrpc } from '~/client/api/useTrpc'
import FormPasswordInput from '~/client/components/app/input/FormPasswordInput.vue'
import { loginInputSchema } from '~/server/modules/auth/models/login.model'

const localePath = useLocalePath()

const { setSession } = useTrpc()
const supabase = useSupabaseClient()
const { t } = useI18n()
const router = useRouter()
const isLoading = ref<boolean>(false)

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
    isLoading.value = true

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
  finally {
    isLoading.value = false
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
        :is-loading="isLoading"
        class="w-full"
        @click="form.submit"
      >
        {{ t('shared.login') }}
      </AppButton>
    </div>
  </section>
</template>
~/client/api/useTrpc
