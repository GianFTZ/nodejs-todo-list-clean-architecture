import { ILoginRepository } from "../../data/contracts/login-repository";
import { LoginModel } from "../../data/models/login";
import { notAuth  } from "../../utils/helpers/not-auth";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { IAuthValidator } from "../contracts/auth-validator";

export class LoginRepository implements ILoginRepository {
  constructor(
    private readonly authValidator: IAuthValidator,
    private readonly jwt: any 
    ){}
  async main (login: LoginModel): Promise<Http.Response> {
    try {
      const response = await this.authValidator.auth(login)
      if(!response) {
        return notAuth()
      }
      const { token } = await this.jwt.getToken(login.username)
      return okWithData({ token })
    } catch(e) {
      return unexpectedError(e, 'login-repository')
    }  
  }
}