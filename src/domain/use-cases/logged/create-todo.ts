import { Todo } from "../../entities/user";

export interface ICreateTodoService {
  create: (todo: Pick<Todo, 'title'>, username: string) => Promise<string | Error>
}