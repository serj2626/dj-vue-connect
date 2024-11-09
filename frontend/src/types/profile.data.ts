interface IProfileData {
  title: string
  name: string
  color: string
  class: string
}

export const profileData: IProfileData[] = [
  {
    title: 'Написать',
    name: 'home',
    color: '#74C0FC',
    class: 'fa-solid fa-envelope fa-xl',
  },
  {
    title: 'Друзья',
    name: 'home',
    color: '#b4370e',
    class: 'fa-solid fa-user-group fa-xl',
  },
  {
    title: 'Посты',
    name: 'home',
    color: '#044308',
    class: 'fa-solid fa-book fa-xl',
  },
]
