import { MissingParamError } from "../errors/missing"

export const missingParam = (param: string) => {
  return {
    status: 400,
    body: new MissingParamError(param)
  }
}