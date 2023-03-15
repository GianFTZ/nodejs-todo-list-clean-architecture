import { ICreateTodoRepository } from "../../data/contracts/create-todo-repository";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { ITodoCreaterAdapter } from "../contracts/todo-creater-adapter";

export class CreateTodoRepository implements ICreateTodoRepository {
  constructor(
    private readonly todoCreater: ITodoCreaterAdapter
  ){}
  async main (title: string, username: string): Promise<Http.Response>{
    try {
      const response = await this.todoCreater.main(title, username)
      if(response instanceof Error) {
        return unexpectedError(response, 'CreateTodoRepository')
      }
      return okWithData(response)
    } catch(e){
      return unexpectedError(e, 'create-todo-repository')
    }
  }
}