import { ISigninService } from "../../domain/use-cases/not-logged/signin";
import { ServerError } from "../../utils/errors/server-error";
import { ILoginRepository } from "../contracts/login-repository";
import { LoginModel } from "../models/login";

export class LoginService implements ISigninService {
  constructor(private readonly loginRepository: ILoginRepository){}
  async login (loginDto: LoginModel): Promise<{ token: any; } | Error>{
    const response = await this.loginRepository.main(loginDto)
    if(response.status != 200){
      return new ServerError(response.body, 'LoginService')
    }
    const { token } = response.body
    return token
  }
}