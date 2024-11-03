<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import type { IAuthForm } from '@/types/types'
import { validateLoginData } from '@/validate'

const toast = useToast()

const router = useRouter()
const userStore = useUserStore()

const form = reactive<IAuthForm>({
  email: '',
  password: '',
})

async function submitForm() {
  try {
    validateLoginData(form)
    const res = await axios.post('/api/login/', form)
    userStore.setToken(res.data)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access
    form.email = ''
    form.password = ''

    await axios
      .get('/api/me/')
      .then(response => {
        userStore.setUserInfo(response.data)
        toast.success('Вход выполнен')
        router.push('/feed')
      })
      .catch(error => {
        toast.error(`Ошибка при входе: ${error.response.data}`)
      })
  } catch (err) {
    console.log(err)
    toast.error(err)
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
    <div class="main-left">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Авторизация</h1>

        <p class="mb-6 text-gray-500">
          Для входа в систему введи свою почту и пароль.
        </p>

        <p class="font-bold">
          У вас нет аккаунта?
          <RouterLink :to="{ name: 'signup' }" class="underline"
            >Кликни здесь</RouterLink
          >
          для создания!
        </p>
      </div>
    </div>

    <div class="main-right">
      <div class="p-12 bg-white border border-gray-200 rounded-lg">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label>Почта</label><br />
            <input
              v-model="form.email"
              type="email"
              placeholder="Ваша почта"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label>Пароль</label><br />
            <input
              v-model="form.password"
              type="password"
              placeholder="Ваш пароль"
              class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <button
              class="py-4 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
