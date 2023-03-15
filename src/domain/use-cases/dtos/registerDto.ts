import { User } from "../../entities/user";

export type SignUpDto = Pick<User, 'name' | 'password' | 'username'>