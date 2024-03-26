/* eslint-disable node/prefer-global/process */
import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query'
import {
  dehydrate,
  hydrate,
  keepPreviousData,
  QueryClient,
  VueQueryPlugin,
} from '@tanstack/vue-query'
import { defineNuxtPlugin, useState } from 'nuxt/app'

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>('vue-query')

  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        placeholderData: keepPreviousData,
        retry: 0,
        staleTime: 5000,
      },
    },
  })
  const options: VueQueryPluginOptions = {
    queryClient,
  }

  nuxt.vueApp.use(VueQueryPlugin, options)

  if (process.server == null) {
    nuxt.hooks.hook('app:rendered', () => {
      vueQueryState.value = dehydrate(queryClient)
    })
  }

  if (process.client == null) {
    nuxt.hooks.hook('app:created', () => {
      hydrate(queryClient, vueQueryState.value)
    })
  }
})
