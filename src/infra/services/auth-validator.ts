import { LoginModel } from "../../data/models/login";
import { IAuthValidator } from "../contracts/auth-validator";

export class AuthValidator implements IAuthValidator {
  constructor(private readonly service: IAuthAdapter){}
  auth(login: LoginModel): boolean {
    
  }
}