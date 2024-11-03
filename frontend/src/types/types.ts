export interface IAuthForm {
  email: string
  name?: string
  password: string
  password2?: string
}

export interface IUserData {
  id: string
  name: string
  email: string
  count_friends: number
  count_posts: number
}

export interface IPost {
  id: number
  body: string
  author: IUserData
  created_at_formatted: string
  likes: string[]
  likes_count: number
}
