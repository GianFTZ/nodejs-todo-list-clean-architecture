import { User } from "../../entities/user";

export type LoginDto = Pick<User, 'username' | 'password'>