import { CreateTodoService } from "../../data/services/create-todo";
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
// export class CreateTodoController {
//   constructor(
//     private readonly createTodo: CreateTodoService
//   ){}
//   async handle(req: Http.Request): Promise<Http.Response>{
//     const { body } = req
//     const requiredFields = ['title']
//     for(const field of requiredFields){
//       if(!body[field]){
//         return missingParam(field)
//       }
//     }
//     const jwt = new Jwt()
//     const auth = await jwt.validate(req)
//     if(auth?.status != 300){
//       return {
//         status: auth?.status as number,
//         body: { message: 'unauthorized' }
//       }
//     }
//     const response = await this.createTodo.create({ title: body.title }, body.username)
//     if(response instanceof Error){
//       return unexpectedError(response, 'CreateTodoController')
//     }
//     return okWithData(response)
//   }
// }