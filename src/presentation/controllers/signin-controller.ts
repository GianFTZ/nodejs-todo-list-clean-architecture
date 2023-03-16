import { ISigninService } from "../../domain/use-cases/not-logged/signin";
import { missingParam } from "../../utils/helpers/missing-param";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";

/**
 * @required
 * username
 * password
 */
export class SignInController {
  constructor(
    private readonly loginService: ISigninService
  ){}
  async handle(req: Http.Request): Promise<Http.Response>{
    const { body } = req
    const requiredFields = ['username', 'password']
    for(const field of requiredFields){
      if(!body[field]){
        return missingParam(field)
      }
    }
    const response = await this.loginService.login({
      username: body.username, password: body.password
    })
    if(response instanceof Error){
      return unexpectedError(response, 'SignInController')
    }
    return okWithData(response)
  }
}