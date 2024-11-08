<script lang="ts" setup>
type Size = 'sm' | 'md' | 'lg'

interface IProps {
  text: string
  size: Size
}

defineProps<IProps>()
</script>
<template>
  <button
    :class="{
      'text-sm py-2 px-3': size === 'sm',
      'text-md py-4 px-6': size === 'md',
      'text-lg py-6 px-8': size === 'lg',
    }"
    class="inline-block bg-purple-600 text-white rounded-lg hover:bg-purple-700"
  >
    <slot></slot>
  </button>
</template>
<style scoped></style>
