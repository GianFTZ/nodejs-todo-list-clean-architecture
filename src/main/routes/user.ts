import { Router, Request } from "express";
import { LoginService } from "../../data/services/login";
import { RegisterService } from "../../data/services/register";
import { PrismaAuth } from "../../infra/adapters/prisma/auth";
import { PrismaRegister } from "../../infra/adapters/prisma/register";
import { LoginRepository } from "../../infra/repositories/login-repository";
import { RegisterRepository } from "../../infra/repositories/register-repository";
import { AuthValidator } from "../../infra/services/auth-validator";
import { SignInController } from "../../presentation/controllers/signin-controller";
import { SignUpController } from "../../presentation/controllers/signup-controller";
import { Jwt } from "../../utils/jwt/jwt";
import { Status } from "../config/enum";

export default (router: Router) => {
  // @register
  router.post('/user/register', async (req: Request, res) => {
    const { controller } = factoryRegister()
    const httpResponse = await controller.handle(req)
    res.status(httpResponse.status || Status.UNEXPECTED_ROUTE_ERROR_STATUS).json(httpResponse.body)
  })
  // @login
  router.post('/user/login', async (req: Request, res) => {
    const { controller } = factoryLogin()
    const httpResponse = await controller.handle(req)
    res.status(httpResponse.status || Status.UNEXPECTED_ROUTE_ERROR_STATUS).json(httpResponse.body)
  })
}

const factoryRegister = () => { 
  const register = new PrismaRegister()
  const repository = new RegisterRepository(register)
  const service = new RegisterService(repository)
  return {
    controller: new SignUpController(service)
  }
}

const factoryLogin = () => {
  const jwt = new Jwt()
  const login = new PrismaAuth()
  const auth = new AuthValidator(login)
  const repository = new LoginRepository(auth, jwt)
  const service = new LoginService(repository)
  return {
    controller: new SignInController(service)
  }
}