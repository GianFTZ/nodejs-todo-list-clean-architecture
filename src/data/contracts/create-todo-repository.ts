import { Http } from "../../utils/http/http";

export interface ICreateTodoRepository {
  main: (title: string, username: string) => Promise<Http.Response> 
}