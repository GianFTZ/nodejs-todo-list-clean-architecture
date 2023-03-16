# Rotas

post /api/todo

- Criar um todo

{
  args: {
    - title: string
  }
  auth?: true
}

put /api/todo

{
  args: {
    - id: number
  }
  auth?: true
}

- Marcar um to-do como concluido