import { PrismaAuth } from "./auth"

describe('prisma auth', ()=> {
  test('should return ok', async () => {
    const sut = new PrismaAuth()
    const response = await sut.main({ username: 'gftz', password: 'secret' })
    expect(response).toBe(true)
  })
})