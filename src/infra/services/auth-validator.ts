import { LoginModel } from "../../data/models/login";
import { IAuthAdapter } from "../contracts/auth-adapter";
import { IAuthValidator } from "../contracts/auth-validator";

export class AuthValidator implements IAuthValidator {
  constructor(private readonly service: IAuthAdapter){}
  async auth(login: LoginModel): Promise<boolean> {
    const response = await this.service.main(login)
    return response
  }
}