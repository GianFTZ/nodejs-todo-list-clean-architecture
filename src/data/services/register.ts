import { SignUpDto } from "../../domain/use-cases/dtos/registerDto";
import { ISignupService } from "../../domain/use-cases/not-logged/signup";
import { ServerError } from "../../utils/errors/server-error";
import { IRegisterRepository } from "../contracts/register-repository";

export class RegisterService implements ISignupService {
  constructor(private readonly registerRepository: IRegisterRepository){}
  async register(signupDto: SignUpDto): Promise<Pick<SignUpDto, "username"> | Error>{
    const response = await this.registerRepository.main(signupDto)
    if(response.status != 200){
      return new ServerError(response.body, 'LoginService')
    }
    return response.body.username
  }
}