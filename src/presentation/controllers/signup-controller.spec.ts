import { RegisterService } from "../../data/services/register"
import { PrismaRegister } from "../../infra/adapters/prisma/register"
import { RegisterRepository } from "../../infra/repositories/register-repository"
import { SignUpController } from "./signup-controller"
import { randomBytes } from 'crypto'

describe('SignUp Controller', ()=> {
  test('should create new user with right values', async () => {
    const fakeData = {
      username: 'gftzucoloto',
      password: 'anonymous',
      name: 'admin'
    }
    const sut = new SignUpController(new RegisterService(new RegisterRepository(new PrismaRegister())))
    const response = await sut.handle({
      body: fakeData
    })
    expect(response.status).toBe(200)
  })

  test('should return 400 if username is not provided', async () => {
    const fakeData = {
      password: 'anonymous',
      name: 'admin'
    }
    const sut = new SignUpController(new RegisterService(new RegisterRepository(new PrismaRegister())))
    const response = await sut.handle({
      body: fakeData
    })
    expect(response.status).toBe(400)
  })

  test('should return 400 if password is not provided', async () => {
    const fakeData = {
      username: 'anonymous',
      name: 'admin'
    }
    const sut = new SignUpController(new RegisterService(new RegisterRepository(new PrismaRegister())))
    const response = await sut.handle({
      body: fakeData
    })
    expect(response.status).toBe(400)
  })

  test('should return 400 if name is not provided', async () => {
    const fakeData = {
      username: 'anonymous',
      password: 'admin'
    }
    const sut = new SignUpController(new RegisterService(new RegisterRepository(new PrismaRegister())))
    const response = await sut.handle({
      body: fakeData
    })
    expect(response.status).toBe(400)
  })
})