import { PrismaMarkAsDone } from "../adapters/prisma/mark-as-done"
import { DoneTodoRepository } from "./done-todo-repository"

describe('create todo repository', ()=> {
  test('should return 200 if create todo', async () => {
    const fakeData = {
      id: 1,
      username: 'gftz'
    }
    const sut = new DoneTodoRepository(new PrismaMarkAsDone())
    const response = await sut.main(fakeData.id, fakeData.username) 
    expect(response.status).toBe(200)
  })
})
