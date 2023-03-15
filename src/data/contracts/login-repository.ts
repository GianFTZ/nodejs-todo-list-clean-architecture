import { Http } from "../../utils/http/http";
import { LoginModel } from "../models/login";

export interface ILoginRepository {
  main: (login: LoginModel) => Promise<Http.Response> 
}