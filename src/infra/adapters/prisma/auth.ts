import { LoginDto } from "../../../domain/use-cases/dtos/loginDto";
import { IAuthAdapter } from "../../contracts/auth-adapter";
import prisma from "./connection";

export class PrismaAuth implements IAuthAdapter {
  main (login: LoginDto): boolean {
    try {
      prisma.user.findUnique({
        where: {
          username: login.username,
        }
      })
    } catch (err) {
      return false
    }
  }
}