import { Http } from "../../utils/http/http";
import { LoginModel } from "../model/login";

export interface ILoginRepository {
  main: (login: LoginModel) => Promise<Http.Response> 
}