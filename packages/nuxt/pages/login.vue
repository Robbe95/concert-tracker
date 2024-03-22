<script setup lang="ts">
import LoginForm from '~/components/auth/LoginForm.vue'

const { t } = useI18n()
</script>

<template>
  <div class="flex size-full flex-1 items-center justify-center">
    <div class="flex w-full max-w-lg -translate-y-12 flex-col items-center gap-4">
      <AppCard
        :title="t('login.title')"
        :description="t('login.description')"
        class="w-full"
      >
        <LoginForm />
      </AppCard>
    </div>
  </div>
</template>
