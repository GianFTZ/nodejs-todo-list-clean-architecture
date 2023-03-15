import { Http } from "../../utils/http/http";
import { RegisterModel } from "../models/register";

export interface IRegisterRepository {
  main: (register: RegisterModel) => Promise<Http.Response> 
}