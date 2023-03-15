import { LoginModel } from "../../data/models/login";

export interface IAuthValidator {
  auth: (loginDto: LoginModel) => boolean
}