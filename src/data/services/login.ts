import { ISigninService } from "../../domain/use-cases/not-logged/signin";
import { ILoginRepository } from "../contracts/login-repository";
import { LoginModel } from "../model/login";

export class LoginService implements ISigninService {
  constructor(private readonly loginRepository: ILoginRepository){}
  async login (loginDto: LoginModel): Promise<{ token: any; }>{
    const response = await this.loginRepository.main(loginDto)
    const { token } = response.body
    return token
  }
}