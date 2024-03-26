<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

const { t } = useI18n()
</script>

<template>
  <div class="grid size-full flex-1 grid-cols-2">
    <div class="flex size-full flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-lg">
        <div class="flex w-full items-center gap-2">
          <LogoIcon class="h-24 text-primary" />
          <AppText variant="hero">
            {{ t('app.name') }}
          </AppText>
        </div>
        <div>
          <AppCard
            :title="t('login.title')"
            :description="t('login.description')"
            class="w-full"
          >
            <AuthLoginForm />
          </AppCard>
        </div>
      </div>
    </div>
    <div class="relative h-screen ">
      <div class="absolute left-0 top-0 z-10 size-full bg-background opacity-30" />

      <img
        src="@/client/assets/images/login-splash.jpg"
        alt="Login"
        class="relative z-0 size-full rounded object-cover brightness-75"
      >
    </div>
  </div>
</template>
