export type User = {
  username: string
  password: string
  name: string
  todo?: Todo[]
}

export type Todo = {
  id: string
  authorId: string
  author: string
  title: string
}