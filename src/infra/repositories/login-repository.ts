import { ILoginRepository } from "../../data/contracts/login-repository";
import { LoginDto } from "../../domain/use-cases/dtos/loginDto";
import { Http } from "../../utils/http/http";

export class loginRepository implements ILoginRepository {
  constructor(private readonly authValidator: AuthValidator){}
  async main (login: LoginDto): Promise<Http.Response> {
    
  }
}