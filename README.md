# backend-ecoleta
Aplicação backend desenvolvido em NodeJS para servir como base para a aplicação EColeta

# libs utilizadas
- express
- ts-node
- typescript
- ts-node-dev
- knex
- sqlite3

# Types instalados
- @types/express

# Comandos
npx tsc --init
npx ts-node src/server.ts   
npx knex migrate:latest --knexfile knexfile.ts magrate:latest
    - npm run knex:migrate