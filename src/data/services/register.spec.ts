import { LoginDto } from "../../domain/use-cases/dtos/loginDto"
import { Http } from "../../utils/http/http"
import { IRegisterRepository } from "../contracts/register-repository"
import { RegisterService } from "./register"

const makeMock = () => {
  class FakeRegisterRepositoryStub implements IRegisterRepository {
    async main(login: LoginDto): Promise<Http.Response> {
      return { status: 200, body: { username: login.username } }
    }
  }
  return {
    mockRegisterRepository: new FakeRegisterRepositoryStub()
  }
}

const makeSut = () => {
  const { mockRegisterRepository } = makeMock()
  const sut = new RegisterService(mockRegisterRepository)
  return {
    mockRegisterRepository,
    sut
  }
}

describe('register login service', ()=> {
  test('should return an error if repository throws', async () => {
    const fakeData = {
      username: 'valid_username',
      password: 'valid_password',
      name: 'valid_name'
    }
    const { sut, mockRegisterRepository } = makeSut()
    const spy = jest.spyOn(mockRegisterRepository, 'main').mockResolvedValue({ status: 500, body: new Error('valid_error') })
    const response = await sut.register(fakeData)
    expect(response instanceof Error).toBe(true)
  })

  test('should return username if repository return ok', async () => {
    const fakeData = {
      username: 'valid_username',
      password: 'valid_password',
      name: 'valid_name'
    }
    const { sut } = makeSut()
    const response = await sut.register(fakeData)
    expect(response).toBe(fakeData.username)
  })
  
})