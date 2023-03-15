import { LoginDto } from "../dtos/loginDto";

export interface ISigninService {
  login: (loginDto: LoginDto) => Promise<{ token: any }>
}