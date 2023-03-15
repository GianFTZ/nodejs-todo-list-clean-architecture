import { ServerError } from "../errors/server-error"

export const unexpectedError = (err: Error, from: string) => {
  return {
    status: 500,
    body: new ServerError(err, from)
  }
} 