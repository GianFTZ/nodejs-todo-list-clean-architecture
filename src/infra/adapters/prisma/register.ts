import { SignUpDto } from "../../../domain/use-cases/dtos/registerDto";
import { IRegisterAdapter } from "../../contracts/register-adapter";
import prisma from "./connection";

export class PrismaRegister implements IRegisterAdapter {
  async main (register: SignUpDto): Promise<Pick<SignUpDto, "username"> | Error>{
    const response = await prisma.user.create({ data: register })
    return {
      username: response.username
    }
  }
}