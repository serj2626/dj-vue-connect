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

export interface IPostList {
  id: number
  body: string
  author: IUserData
  created_at_formatted: string
  likes: string[]
  likes_count: number
}

// {
//   "posts": [
//     {
//       "id": 2,
//       "body": "n kmbk",
//       "author": {
//         "id": "704b6c6a-7a4a-4b17-b4ed-c94d9fe7b355",
//         "name": "Sergey",
//         "email": "serj2656@mail.ru",
//         "count_friends": 0,
//         "count_posts": 2
//       },
//       "created_at_formatted": "10 часов, 37 минут",
//       "likes": [
//         "704b6c6a-7a4a-4b17-b4ed-c94d9fe7b355"
//       ],
//       "likes_count": 1
//     },
//     {
//       "id": 1,
//       "body": "gvjh",
//       "author": {
//         "id": "704b6c6a-7a4a-4b17-b4ed-c94d9fe7b355",
//         "name": "Sergey",
//         "email": "serj2656@mail.ru",
//         "count_friends": 0,
//         "count_posts": 2
//       },
//       "created_at_formatted": "10 часов, 37 минут",
//       "likes": [],
//       "likes_count": 0
//     }
//   ],
//   "user": {
//     "id": "704b6c6a-7a4a-4b17-b4ed-c94d9fe7b355",
//     "name": "Sergey",
//     "email": "serj2656@mail.ru",
//     "count_friends": 0,
//     "count_posts": 2
//   },
//   "status": "Это Вы"
// }
