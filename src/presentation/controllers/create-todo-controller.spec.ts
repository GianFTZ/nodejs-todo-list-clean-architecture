import { CreateTodoService } from "../../data/services/create-todo"
import { PrismaCreateTodo } from "../../infra/adapters/prisma/create-todo"
import { CreateTodoRepository } from "../../infra/repositories/create-todo-repository"
import { CreateTodoController } from "./create-todo-controller"

describe('Create Todo Controller', ()=> {
  test('should create todo', async () => {
    const fakeData = {
      title: 'new-todo-2'
    }
    const sut = new CreateTodoController(new CreateTodoService(new CreateTodoRepository(new PrismaCreateTodo())))
    const response = await sut.handle({
      body: fakeData,
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.Z2Z0eg.ztJdvhYhtf5O1gVRSKzF6W_5qb3jgZi5yyhtdk1JeDw'
      }
    })
    expect(response.status).toBe(200)
  })
})