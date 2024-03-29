<script setup lang="ts">
import {
  AppIcon,
  AppLoader,
  type Icon,
} from '@wisemen/vue-core'
import { computed } from 'vue'

import type { ButtonStyleProps } from './button.style'
import { button } from './button.style'

export interface AppButtonProps {
  /**
   * The icon to display on the left side of the button.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The icon to display on the right side of the button.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * Whether the button is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the button is in a loading state.
   * @default false
   */
  isLoading?: boolean
  /**
   * The size of the button.
   * @default 'default'
   */
  size?: ButtonStyleProps['size']
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: ButtonStyleProps['variant']
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  // TODO: find out why defaulting these to `null` breaks the `Icon` prop type when using `declare module`.
  // iconLeft: null,
  // iconRight: null,
  isDisabled: false,
  isLoading: false,
  size: 'default',
  type: 'button',
  variant: 'default',
})

const buttonClasses = computed<string>(() =>
  button({
    size: props.size,
    variant: props.variant,
  }))
</script>

<template>
  <button
    :disabled="isDisabled || isLoading"
    :type="props.type"
    :class="buttonClasses"
  >
    <AppIcon
      v-if="props.iconLeft !== null && props.iconLeft !== undefined"
      :icon="props.iconLeft"
      :class="{
        'opacity-0': props.isLoading,
      }"
      class="mr-3"
    />

    <span
      :class="{
        'opacity-0': props.isLoading,
      }"
    >
      <slot />
    </span>

    <div
      v-if="props.isLoading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <AppLoader
        class="size-4"
      />
    </div>

    <AppIcon
      v-if="props.iconRight !== null && props.iconRight !== undefined"
      :icon="props.iconRight"
      :class="{
        'opacity-0': props.isLoading,
      }"
      class="ml-3"
    />
  </button>
</template>
