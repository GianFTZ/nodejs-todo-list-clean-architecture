import { LoginDto } from "../../../domain/use-cases/dtos/loginDto";
import { IAuthAdapter } from "../../contracts/auth-adapter";
import prisma from "./connection";

export class PrismaAuth implements IAuthAdapter {
  main (login: LoginDto): boolean {
    try {
      
    } catch (err) {
      return false
    }
  }
}