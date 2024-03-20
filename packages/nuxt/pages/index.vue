<script setup lang="ts">
import { getUsers } from '~/api/users/getUsers'

const users = await getUsers()
</script>

<template>
  <div>
    {{ users }}
  </div>
</template>
