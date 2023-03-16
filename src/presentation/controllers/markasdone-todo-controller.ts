import { CreateTodoService } from "../../data/services/create-todo";
import { DoneTodoService } from "../../data/services/done-todo";
import { ISignupService } from "../../domain/use-cases/not-logged/signup";
import { missingParam } from "../../utils/helpers/missing-param";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { Jwt } from "../../utils/jwt/jwt";

/**
 * @required
 * title
 * username
 */
export class MarkTodoAsDoneController {
  constructor(
    private readonly markAsDone: DoneTodoService
  ){}
  async handle(req: Http.Request): Promise<Http.Response>{
    const { body } = req
    const requiredFields = ['id']
    for(const field of requiredFields){
      if(!body[field]){
        return missingParam(field)
      }
    }
    const jwt = new Jwt()
    const auth = await jwt.validate(req)
    if(auth?.status != 300){
      return {
        status: auth?.status as number,
        body: { message: 'unauthorized' }
      }
    }
    const response = await this.markAsDone.done(req.body.id, auth?.user)
    if(response instanceof Error){
      return unexpectedError(response, 'MarkTodoAsDoneController')
    }
    return okWithData(response)
  }
}