import { IRegisterRepository } from "../../data/contracts/register-repository";
import { RegisterModel } from "../../data/models/register";
import { okWithData } from "../../utils/helpers/ok-with-data";
import { unexpectedError } from "../../utils/helpers/unexpected-errror";
import { Http } from "../../utils/http/http";
import { IRegisterAdapter } from "../contracts/register-adapter";

export class RegisterRepository implements IRegisterRepository {
  constructor(
    private readonly register: IRegisterAdapter,
    private readonly jwt: any
  ){}
  async main(register: RegisterModel): Promise<Http.Response> {
    try {
      const response = await this.register.main(register)
      if(response instanceof Error){
        return unexpectedError(response, 'register-repository')
      }
      return okWithData({ username: response.username })
    } catch (error) {
      return unexpectedError(error, 'register-repository')
    }
  }
}