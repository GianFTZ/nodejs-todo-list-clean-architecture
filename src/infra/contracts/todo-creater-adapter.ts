
export interface ITodoCreaterAdapter {
  main: (title: string, username: string) => Promise<string | Error>
}