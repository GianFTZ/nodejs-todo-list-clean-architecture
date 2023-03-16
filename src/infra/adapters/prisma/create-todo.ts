import { ServerError } from "../../../utils/errors/server-error";
import { ITodoCreaterAdapter } from "../../contracts/todo-creater-adapter";
import prisma from "./connection";

export class PrismaCreateTodo implements ITodoCreaterAdapter {
  async main(title: string, username: string): Promise<string | Error>{
    try {
      await prisma.user.update({
        where: {
          username
        },
        data: {
          todos: {
            create: {
              title
            }
          }
        }
      })
      return title
    } catch (error) {
      return new ServerError(error, 'PrismaCreateTodo')
    }
  }
}