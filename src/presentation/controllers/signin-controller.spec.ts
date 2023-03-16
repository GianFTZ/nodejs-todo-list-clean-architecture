import { LoginService } from "../../data/services/login"
import { PrismaAuth } from "../../infra/adapters/prisma/auth"
import { LoginRepository } from "../../infra/repositories/login-repository"
import { AuthValidator } from "../../infra/services/auth-validator"
import { Jwt } from "../../utils/jwt/jwt"
import { SignInController } from "./signin-controller"

describe('sign in controller', ()=> {
  test('should return 200 if registered user is provided', async () => {
    const fakeData = {
      username: 'gftz',
      password: 'secret'
    }
    const sut = new SignInController(new LoginService(new LoginRepository(new AuthValidator(new PrismaAuth()), new Jwt())))
    const response = await sut.handle({
      body: fakeData
    })
    expect(typeof response.body).toBe("string")
  })
})