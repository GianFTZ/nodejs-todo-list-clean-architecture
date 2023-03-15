import { RegisterModel } from "../../data/models/register";

export interface IRegisterAdapter {
  main: (register: RegisterModel) => Promise<Pick<RegisterModel, 'username'> | Error>
}