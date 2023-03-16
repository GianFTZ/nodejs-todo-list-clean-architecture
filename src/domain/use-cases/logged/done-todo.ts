export interface IDoneTodoService {
  done: (id: number, username: string) => Promise<string | Error>
}