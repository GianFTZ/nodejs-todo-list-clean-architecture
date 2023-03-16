import { ServerError } from "../../../utils/errors/server-error";
import { IMarkAsDoneAdapter } from "../../contracts/mark-as-done-adapter";
import prisma from "./connection";

export class PrismaMarkAsDone implements IMarkAsDoneAdapter {
  async main (id: number, username: string): Promise<string | Error>{
    try {
      const response = await prisma.user.update({
        where: {
          username
        },
        data: {
          todos: {
            update: {
              where: {
                id
              },
              data: {
                done: true
              }
            }
          }
        }
      })
      return 'ok'
    } catch (error) {
      return new ServerError(error, 'PrismaMarkAsDone')
    }
  }
}