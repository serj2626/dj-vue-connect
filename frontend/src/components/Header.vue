<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { headerLinks } from '@/types/header.data'

const userStore = useUserStore()
</script>

<template>
  <nav class="py-10 border-b border-gray-200">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between">
        <div class="menu-left">
          <p class="text-3xl app-title">Коннект</p>
        </div>

        <div
          class="menu-center flex space-x-12"
          v-if="userStore.user.isAuthenticated"
        >
          <RouterLink
            v-for="link in headerLinks"
            :key="link.name"
            :to="{ name: link.name }"
          >
            <svg
              :title="link.title"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="link.svg"
              />
            </svg>
          </RouterLink>
        </div>
        <div class="menu-right">
          <div v-if="userStore.user.isAuthenticated">
            <RouterLink
              :to="{ name: 'profile', params: { id: userStore.user.id } }"
            >
              <img
                title="userStore.user.name"
                src="https://i.pravatar.cc/40?img=70"
                class="rounded-full transition-all duration-200 hover:outline hover:scale-95 outline-2 outline-offset-2 outline-purple-600 ease-in"
              />
            </RouterLink>
          </div>
          <div v-else>
            <RouterLink
              :to="{ name: 'login' }"
              class="mr-4 py-4 px-6 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >Войти</RouterLink
            >
            <RouterLink
              :to="{ name: 'signup' }"
              class="py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              >Зарегистрироваться</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-purple-700;
}

.app-title {
  @apply font-bold;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(45deg, #d644ff, #b327c3, #9a6ae2, #7327c9);
}
</style>
