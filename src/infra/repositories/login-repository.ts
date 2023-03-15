import { ILoginRepository } from "../../data/contracts/login-repository";
import { LoginDto } from "../../domain/use-cases/dtos/loginDto";
import { ok } from "../../utils/helpers/ok";
import { notAuth  } from "../../utils/helpers/not-auth";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { IAuthValidator } from "../contracts/auth-validator";

export class loginRepository implements ILoginRepository {
  constructor(private readonly authValidator: IAuthValidator){}
  async main (login: LoginDto): Promise<Http.Response> {
    try {
      const response = await this.authValidator.auth(login)
      if(!response) {
        return notAuth()
      }
      return ok(response)
    } catch(e) {
      return unexpectedError(e, 'login-repository')
    }  
  }
}