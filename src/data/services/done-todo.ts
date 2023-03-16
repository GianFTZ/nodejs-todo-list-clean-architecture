import { IDoneTodoService } from "../../domain/use-cases/logged/done-todo";
import { ServerError } from "../../utils/errors/server-error";
import { IDoneTodoRepository } from "../contracts/done-todo-repository";

export class DoneTodoService implements IDoneTodoService {
  constructor(private readonly doneTodoRepository: IDoneTodoRepository){}
  async done(id: number, username: string): Promise<string | Error>{
    const response = await this.doneTodoRepository.main(id, username)
    if(response.status != 200){
      return new ServerError(response.body, 'DoneTodoService')
    }
    return response.body
  }
}