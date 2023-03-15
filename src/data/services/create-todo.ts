import { Todo } from "../../domain/entities/user";
import { ICreateTodoService } from "../../domain/use-cases/logged/create-todo";
import { ServerError } from "../../utils/errors/server-error";
import { ICreateTodoRepository } from "../contracts/create-todo-repository";

export class CreateTodoService implements ICreateTodoService {
  constructor(private readonly createTodoRepository: ICreateTodoRepository){}
  async create(todo: Pick<Todo, "title">, username: string): Promise<string | Error>{
    const response = await this.createTodoRepository.main(todo.title, username)
    if(response.status != 200){
      return new ServerError(response.body, 'CreateTodoService')
    }
    const { title } = response.body
    return title
  }
}