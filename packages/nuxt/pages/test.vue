<script setup lang="ts">
import { useForm } from 'formango'
import { z } from 'zod'

const array = z.object({
  whatever: z.object({
    arrayTest: z.array(z.number()),
  }),
})

const { form } = useForm({
  initialState: {
    whatever: {
      arrayTest: [
        1,
        2,
        3,
      ],
    },
  },
  schema: array,
})

const whatever = form.register('whatever')

const arrayField = whatever.registerArray('arrayTest')

function onRemove(index: number) {
  arrayField.remove(index)
}
</script>

<template>
  <div>
    <div
      v-for="(field, index) in arrayField.fields"
      :key="index"
    >
      {{ field }}
      <button @click="onRemove(index)">
        Remove
      </button>
    </div>
  </div>
</template>
