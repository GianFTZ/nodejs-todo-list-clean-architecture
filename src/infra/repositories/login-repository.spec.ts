import { LoginDto } from "../../domain/use-cases/dtos/loginDto"
import { IAuthValidator } from "../contracts/auth-validator"
import { LoginRepository } from "./login-repository"

const makeMock = () => {
  class FakeAuthValidatorStub implements IAuthValidator {
    async auth (loginDto: LoginDto): Promise<boolean>{
      return true
    }
  }
  class FakeJwtStub {
    async getToken(){
      return {
        token: 'valid_token'
      }
    }
  }
  return {
    mockAuthValidator: new FakeAuthValidatorStub(),
    mockJwt: new FakeJwtStub()
  }
}

const makeSut = () => {
  const { mockAuthValidator, mockJwt } = makeMock()
  const sut = new LoginRepository(mockAuthValidator, mockJwt)
  return {
    sut,
    mockAuthValidator
  }
}

describe('login repository', ()=> {
  test('return 403 if login is not registered', async () => {
    const fakeData = {
      username: 'not_registered_username',
      password: 'not_registered_password'
    }
    const { mockAuthValidator, sut } = makeSut()
    const spy = jest.spyOn(mockAuthValidator, 'auth').mockResolvedValue(false)
    const response = await sut.main(fakeData)
    expect(response.status).toBe(403)
  })

  test('return 200 if registered login', async () => {
    const fakeData = {
      username: 'registered_username',
      password: 'registered_password'
    }
    const { sut } = makeSut()
    const response = await sut.main(fakeData)
    expect(response.status).toBe(200)
  })
})