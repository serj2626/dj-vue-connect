<script lang="ts" setup>

const query = defineModel()

interface IProps {
  placeholder: string
  type?: string
  size?: string
}

defineProps<IProps>()
</script>
<template>
  <input
    v-model="query"
    type="search"
    class="p-4 w-full bg-gray-100 rounded-lg"
    :placeholder="placeholder"
  />
</template>
