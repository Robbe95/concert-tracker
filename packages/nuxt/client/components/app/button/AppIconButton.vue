<script setup lang="ts">
import { AppIcon, type Icon } from '@wisemen/vue-core'

import AppButton from '~/client/components/app/button/AppButton.vue'
import type { ButtonStyleProps } from '~/client/components/app/button/button.style'
import type { IconStyleProps } from '~/client/components/app/icon/icon.style'

const props = withDefaults(
  defineProps<{
    /**
     * The icon to display
     */
    icon: Icon
    /**
     * The size of the icon
     * @default default
     */
    iconSize?: IconStyleProps['size']
    /**
     * Whether the button is disabled
     */
    isDisabled?: boolean
    /**
     * The label for the button for accessibility
     */
    label: string
    /**
     * The variant of the button
     * @default default
     */
    variant?: ButtonStyleProps['variant']
  }>(),
  {
    iconSize: 'default',
    isDisabled: false,
    variant: 'default',
  },
)
</script>

<template>
  <AppButton
    :variant="props.variant"
    :aria-label="props.label"
    :is-disabled="props.isDisabled"
    size="icon"
  >
    <AppIcon
      :icon="props.icon"
      :size="props.iconSize"
    />
  </AppButton>
</template>
~/client/components/app/button/button.style~/client/components/app/icon/icon.style
