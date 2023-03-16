# explicação da arquitetura:

├── src
│   ├── data
│   │   ├── contracts
│   │   │
│   │   ├── models
│   │   │  
│   │   └── services 
│   ├── domain
│   │   ├── entities
│   │   └── use-cases
│   │       ├── dtos
│   │       ├── logged
│   │       └── not-logged
│   ├── infra
│   │   ├── adapters
│   │   │   └── prisma
│   │   ├── contracts
│   │   ├── repositories
│   │   └── services
│   ├── main
│   │   ├── config
│   │   ├── routes
│   ├── presentation
│   │   └── controllers
│   └── utils
│       ├── errors
│       ├── helpers
│       ├── http
│       └── jwt

# camada de domain:

- Dentro da camada de domain ela possui as entidades, que são tudo que vai interagir na aplicação.

- Dentro da camada de domain ela possui os use cases, que são como tudo vai interagir na aplicação.

# Camada de data:

- Dentro da camada de data tem os services, que serve para abstrair os casos de usos presentes dentro da camda de domain, e expor ele as camadas superiores.

- Dentro da camada de data tem os models, que são abstrações de entidades, para expo-los para camadas superiores.

- Dentro da camada de data tem os contracts, que são os protocolos que os services vão seguir.

# Infra

- Dentro da camada de infra temos os repositories, que são quem vai se comunicar com a base de dados.

- Dentro da camada de infra temos os contracts, que são abstrações para desacoplamento.

- Dentro da camada de infra temos os services, que são funções uteis para toda a camada.

- Dentro da camada de infra temos os adapters, que são responsáveis por fazer o acoplamento com a base de dados.

# Presentation

- Dentro da camada de presentation temos os controllers que são responsaveis por expor os services da camada de data a uma ação externa.

# Main

- Dentro da camada main, temos as configs do servidor, e as rotas da mesmas, sendo implementadas no runner file do projeto.