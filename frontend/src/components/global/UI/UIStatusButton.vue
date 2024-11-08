<script setup lang="ts">
type Size = 'sm' | 'md' | 'lg'

type StatusFriend =
  | 'Это Вы'
  | 'Ваш друг'
  | 'Вы подписаны'
  | 'Ваш подписчик'
  | 'Отправить заявку'

interface IProps {
  size: Size
  status: StatusFriend
}

const emit = defineEmits(['delete', 'sendRequest'])

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
