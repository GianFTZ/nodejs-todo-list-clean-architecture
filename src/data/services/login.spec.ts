import { LoginDto } from "../../domain/use-cases/dtos/loginDto"
import { Http } from "../../utils/http/http"
import { ILoginRepository } from "../contracts/login-repository"
import { LoginService } from "./login"

const makeMock = () => {
  class FakeLoginRepositoryStub implements ILoginRepository {
    async main(login: LoginDto): Promise<Http.Response> {
      return { status: 200, body: 'valid_body' }
    }
  }
  return {
    mockLoginRepository: new FakeLoginRepositoryStub()
  }
}

const makeSut = () => {
  const { mockLoginRepository } = makeMock()
  const sut = new LoginService(mockLoginRepository)
  return {
    mockLoginRepository,
    sut
  }
}

describe('user login service', ()=> {
  test('should return an error if repository throws', async () => {
    const fakeData = {
      username: 'valid_username',
      password: 'valid_password'
    }
    const { sut, mockLoginRepository } = makeSut()
    const spy = jest.spyOn(mockLoginRepository, 'main').mockResolvedValue({ status: 500, body: new Error('valid_error') })
    const response = await sut.login(fakeData)
    expect(response instanceof Error).toBe(true)
  })
})