import { DoneTodoService } from "../../data/services/done-todo"
import { PrismaMarkAsDone } from "../../infra/adapters/prisma/mark-as-done"
import { DoneTodoRepository } from "../../infra/repositories/done-todo-repository"
import { MarkTodoAsDoneController } from "./markasdone-todo-controller"

describe('Mark Todo As Done Controller', ()=> {
  test('should mark todo as done', async () => {
    const fakeData = {
      id: 28
    }
    // const sut = new CreateTodoController(new CreateTodoService(new CreateTodoRepository(new PrismaCreateTodo())))
    const sut = new MarkTodoAsDoneController(new DoneTodoService(new DoneTodoRepository(new PrismaMarkAsDone())))
    const response = await sut.handle({
      body: fakeData,
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.Z2Z0enVjb2xvdG8.fud5rZuIB2zeAHTF94H5rmYbeuRUK-Wp0iQe425_ick'
      }
    })
    expect(response.status).toBe(200)
  })
})