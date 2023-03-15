import { Http } from "../../utils/http/http"
import { ICreateTodoRepository } from "../contracts/create-todo-repository"
import { CreateTodoService } from "./create-todo"

const makeMock = () => {
  class FakeCreateTodoRepositoryStub implements ICreateTodoRepository {
    async main (title: string, username: string): Promise<Http.Response>{
      return {
        status: 200,
        body: { title }
      }
    }
  }
  return { 
    mockCreateTodoRepository: new FakeCreateTodoRepositoryStub()
  }
}

const makeSut = () => {
  const { mockCreateTodoRepository } = makeMock()
  const sut = new CreateTodoService(mockCreateTodoRepository)
  return {
    mockCreateTodoRepository,
    sut
  }
}

describe('create todo service', ()=> {
  test('return 500 if repository throws', async () => {
    const { mockCreateTodoRepository, sut } = makeSut()
    const spy = jest.spyOn(mockCreateTodoRepository, 'main').mockResolvedValue({ status: 500, body: new Error('valid_error') })
    const response = await sut.create({ title: 'valid_title' }, 'valid_username')
    expect(response instanceof Error).toBe(true)
  })

  test('return 200 if repository returns', async () => {
    const { sut } = makeSut()
    const response = await sut.create({ title: 'valid_title' }, 'valid_username')
    expect(response).toBe('valid_title')
  })
})