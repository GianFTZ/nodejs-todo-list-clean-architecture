import { Http } from "../../utils/http/http";

export interface IDoneTodoRepository {
  main: (id: number, username: string) => Promise<Http.Response>
}