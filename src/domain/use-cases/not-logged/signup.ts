import { SignUpDto } from "../dtos/registerDto";

export interface ISignupService {
  register: (signupDto: SignUpDto) => Promise<Pick<SignUpDto, 'username'>>
}