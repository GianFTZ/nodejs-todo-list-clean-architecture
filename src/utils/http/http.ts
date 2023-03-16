export namespace Http {
  export type Response = {
    status: number
    body: any
  }
  export type Request = {
    body: any,
    headers?: any
  }
}