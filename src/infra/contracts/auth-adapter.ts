import { LoginModel } from "../../data/models/login";

export interface IAuthAdapter {
  main: (login: LoginModel) => boolean
}