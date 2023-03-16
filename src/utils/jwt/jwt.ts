import jwt from 'jsonwebtoken'
import { env } from '../../../env'

export class Jwt {
  async getToken(username: string): Promise<{ token: any }> {
    const token = jwt.sign(username, env.token)
    return {
      token
    }
  }
  async validate(req: any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return { status: 400 }
    const response = jwt.verify(token, env.token, (err: any, user: any) => {
      if(err) return { status: 403 }
      return { status: 300, user }
    })
    return {
      status: 200,
      // @ts-ignore
      user: response.user
    }
  }
}