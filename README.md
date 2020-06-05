# backend-ecoleta

Projeto Open Source desenvolvido na Next Level Week da Rocketseat utilizando TypeScript, NodeJS, ReactJS e React Native. Com objetivo de criar uma conexão entre empresas e/ou entidades que coletam resíduos (orgânicos e inorgânicos) a pessoas/empresas que necessitam descartar esses resíduos.

# libs utilizadas
- express
- ts-node
- typescript
- ts-node-dev
- knex
- sqlite3
- cors

# Types instalados
- @types/express
- @types/cors

# Comandos
- npx tsc --init
- npx ts-node src/server.ts   
- npx knex migrate:latest --knexfile knexfile.ts magrate:latest
    - npm run knex:migrate
- knex --knexfile knexfile.ts seed:run
    - npm run knex:seed
    
- CTRL + SHIFT + P -> PEsquisar aplicativos ou configuração do VSCode