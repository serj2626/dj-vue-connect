<script setup lang="ts">
import { computed } from 'vue'
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

const emit = defineEmits(['delete', 'sendRequest', 'reset'])

const { size, status } = defineProps<IProps>()

const classColor = computed(() => ({
  'bg-blue-600 hover:bg-blue-700': status === 'Вы подписаны',
  'bg-yellow-400 hover:bg-yellow-500': status === 'Ваш подписчик',
  'bg-green-600 hover:bg-green-700': status === 'Ваш друг',
  'bg-purple-600 hover:bg-purple-700': status === 'Отправить заявку',
}))

const classSize = computed(() => ({
  'text-sm py-2 px-3': size === 'sm',
  'text-md py-4 px-6': size === 'md',
  'text-lg py-6 px-8': size === 'lg',
}))

const submit = () => {
  if (status === 'Отправить заявку') {
    emit('sendRequest')
  } else if (status === 'Ваш друг') {
    emit('delete')
  } else {
    emit('reset')
  }
}
</script>
<template>
  <button
    @click="submit"
    :class="[classSize, classColor]"
    class="inline-block w-full text-white rounded-lg"
  >
    <slot></slot>
  </button>
</template>
