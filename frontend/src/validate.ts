import type { IAuthForm } from './types/types'

function validateRegisterData(form: IAuthForm) {
  if (
    form.email === '' ||
    form.name === '' ||
    form.password === '' ||
    form.password2 === ''
  ) {
    throw new Error('Обязательные поля не могут быть пустыми')
  }

  if (form.password.length < 8) {
    throw new Error('Пароль должен содержать не менее 8 символов')
  }

  if (form.password !== form.password2) {
    throw new Error('Пароли не совпадают')
  }
}

function validateLoginData(form: IAuthForm) {
  if (form.email === '' || form.password === '') {
    throw new Error('Поля не могут быть пустыми')
  }
  if (form.password.length < 8) {
    throw new Error('Пароль должен содержать не менее 8 символов')
  }
}

export { validateRegisterData, validateLoginData }
