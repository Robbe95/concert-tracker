<script setup lang="ts">
import LoginForm from '~/components/auth/LoginForm.vue'

const { t } = useI18n()

definePageMeta({
  layout: 'login-layout',
})
</script>

<template>
  <div class="grid size-full flex-1 grid-cols-2">
    <div class="flex size-full flex-1 items-center justify-center">
      <div class="w-full max-w-lg">
        <AppCard
          :title="t('login.title')"
          :description="t('login.description')"
          class="w-full"
        >
          <LoginForm />
        </AppCard>
      </div>
    </div>
    <div class="relative h-screen ">
      <div class="absolute left-0 top-0 z-10 size-full bg-background opacity-30" />

      <img
        src="@/assets/images/login-splash.jpg"
        alt="Login"
        class="relative z-0 size-full rounded object-cover brightness-75"
      >
    </div>
  </div>
</template>
