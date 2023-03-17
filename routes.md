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

post /api/user/login

{
  args: {
    - username: string
    - password: string
  }
  auth?: false
}

- Fazer login e obter o token de acesso

post /api/user/register

{
  args: {
    - username: string
    - password: string
    - name: string
  }
  auth?: false
}

- Se cadastrar no sistema