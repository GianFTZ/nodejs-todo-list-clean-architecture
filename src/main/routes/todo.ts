import { Router } from "express";
import { CreateTodoService } from "../../data/services/create-todo";
import { DoneTodoService } from "../../data/services/done-todo";
import { PrismaCreateTodo } from "../../infra/adapters/prisma/create-todo";
import { PrismaMarkAsDone } from "../../infra/adapters/prisma/mark-as-done";
import { CreateTodoRepository } from "../../infra/repositories/create-todo-repository";
import { DoneTodoRepository } from "../../infra/repositories/done-todo-repository";
import { CreateTodoController } from "../../presentation/controllers/create-todo-controller";
import { MarkTodoAsDoneController } from "../../presentation/controllers/markasdone-todo-controller";
import { Status } from "../config/enum";


export default(router: Router) => {
  // @create-to-do
  router.post('/todo', async (req, res) => {
    const { controller } = factoryCreate()
    const httpResponse = await controller.handle(req)
    res.status(httpResponse.status || Status.UNEXPECTED_ROUTE_ERROR_STATUS).json(httpResponse.body)
  })
  // @mark-todo-as-done
  router.put('/todo', async (req, res) => {
    const { controller } = factoryDone()
    const httpResponse = await controller.handle(req)
    res.status(httpResponse.status || Status.UNEXPECTED_ROUTE_ERROR_STATUS).json(httpResponse.body)
  })
}

const factoryCreate = () => {
  const creater = new PrismaCreateTodo()
  const repository = new CreateTodoRepository(creater)
  const service = new CreateTodoService(repository)
  return {
    controller: new CreateTodoController(service)
  }
}

const factoryDone = () => {
  const markasdone = new PrismaMarkAsDone()
  const repository = new DoneTodoRepository(markasdone)
  const service = new DoneTodoService(repository)
  return {
    controller: new MarkTodoAsDoneController(service)
  }
}