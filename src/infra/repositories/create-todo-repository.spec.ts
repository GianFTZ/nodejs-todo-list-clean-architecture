import { PrismaCreateTodo } from "../adapters/prisma/create-todo"
import { CreateTodoRepository } from "./create-todo-repository"

describe('create todo repository', ()=> {
  test('should return 200 if create todo', async () => {
    const fakeData = {
      title: 'new-todo',
      username: 'gftz'
    }
    const sut = new CreateTodoRepository(new PrismaCreateTodo())
    const response = await sut.main(fakeData.title, fakeData.username)
    expect(response.status).toBe(200)
  })
})
