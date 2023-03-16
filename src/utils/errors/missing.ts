export class MissingParamError extends Error{
  constructor(param: string){
    super(`missing param: ${param}`)
    this.name = 'MissingParamError'
  }
}