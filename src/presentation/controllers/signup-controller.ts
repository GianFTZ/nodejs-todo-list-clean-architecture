import { ISignupService } from "../../domain/use-cases/not-logged/signup";
import { missingParam } from "../../utils/helpers/missing-param";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";

/**
 * @required
 * username
 * password
 * name
 */
export class SignUpController {
  constructor(
    private readonly registerService: ISignupService
  ){}
  async handle(req: Http.Request): Promise<Http.Response>{
    const { body } = req
    const requiredFields = ['username', 'password', 'name']
    for(const field of requiredFields){
      if(!body[field]){
        return missingParam(field)
      }
    }
    const response = await this.registerService.register({
      name: body.name, password: body.password, username: body.username
    })
    if(response instanceof Error){
      return unexpectedError(response, 'SignUpController')
    }
    return okWithData(response)
  }
}