import type { VariantProps } from '@/libs/cva.lib'
import { cva } from '@/libs/cva.lib'

export const button = cva({
  base: 'relative flex items-center justify-center rounded-button border border-solid outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: 'h-10 px-4 py-2 text-sm',
      icon: 'size-10 text-sm',
      lg: 'h-11 rounded-button px-8 text-base',
      sm: 'h-9 rounded-button px-3 text-xs',
    },
    variant: {
      'default':
        'border-primary bg-primary text-primary-foreground ring-ring',
      'destructive': 'border-destructive bg-destructive text-destructive-foreground focus-visible:ring-destructive',
      'destructive-outline': 'border-destructive bg-transparent text-destructive ring-destructive',
      'ghost':
        'border-transparent bg-transparent text-white ring-foreground hover:enabled:bg-primary hover:enabled:text-primary-foreground focus:enabled:bg-primary focus:enabled:text-primary-foreground',
      'outline':
        'border-primary bg-background text-primary ring-primary',
      'secondary':
        'border-muted-background bg-muted-background text-muted-foreground ring-foreground',
    },
  },
})

export const buttonIcon = cva({
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      default: 'size-3.5',
      lg: 'size-4',
      sm: 'size-3.5',
    },
  },
})

export type ButtonStyleProps = VariantProps<typeof button>
