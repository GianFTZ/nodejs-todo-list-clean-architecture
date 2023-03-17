import { IDoneTodoRepository } from "../../data/contracts/done-todo-repository";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { IMarkAsDoneAdapter } from "../contracts/mark-as-done-adapter";

export class DoneTodoRepository implements IDoneTodoRepository {
  constructor(
    private readonly markAsDone: IMarkAsDoneAdapter
  ){}
  async main(id: number, username: string): Promise<Http.Response>{
    try {
      const response = await this.markAsDone.main(id, username)
      if(response instanceof Error){
        return unexpectedError(response, 'DoneTodoRepository')
      }
      return okWithData(response)
    } catch (e) {
      return unexpectedError(e, 'done-todo-repository')
    }
  }
} 