export interface IMarkAsDoneAdapter {
  main: (id: number, username: string) => Promise<string | Error>
}