import { LoginDto } from "../../../domain/use-cases/dtos/loginDto";
import { IAuthAdapter } from "../../contracts/auth-adapter";
import prisma from "./connection";

// export class PrismaAuth implements IAuthAdapter {
export class PrismaAuth {
  async main (login: LoginDto): Promise<any> {
    try {
      const response = await prisma.user.findFirst({
        where: {
          username: login.username,
          password: login.password
        }
      })
      if(!response){
        return false
      }
      return true
    } catch (err) {
      return false
    }
  }
}