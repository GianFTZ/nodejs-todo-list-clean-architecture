export class ServerError extends Error {
  constructor(err: any, from: string){
    super(`unexpected server error ${err}`)
    this.name = `caused-by-${from}`
  }
}