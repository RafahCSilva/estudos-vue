# Sessão 22: Projeto 6 - Knowledge

## Instalando o Back-end FINAL

Instalando o PostgreSQL 
[FONTE](http://blog.locaweb.com.br/geral/instalando-o-postgresql-no-mac-os-x-via-brew/)

````bash
# instalando no MAC
brew update
brew install postgres
postgres --version

# iniciando na sessao
postgres -D /usr/local/var/postgres

# iniciando no startup
mkdir -p ~/Library/LaunchAgents
ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

# cria DB com seu user para poder logar na primeira vez
createdb

# connect
psql

# crie o banco do pj
CREATE DATABASE knowledge_final;
\l
\c knowledge_final;
\dt
````

basico de navegação do psql:

- `\l` - Lista seus Databases
- `\c mydatabasename` - Conecta a um database
- `\d` - Lista as relacoes deste database
- `\d mytablename` - Informacoes de uma tabela
- `\dt` - informação da tabela ja conectada
- `\q` - Quit

copie o .env
````bash 
cd 22_pj6_knowledge/backend_final/
cp env_file .env
```` 

e edite-o
````js
module.exports = {
  authSecret: 'ALGO_SECRETO',
  db: {
    host : '127.0.0.1',
    port: 5432,
    database: 'knowledge_final',
    user: 'rafaelcardoso',
    password: ''
  }
}
````

Configurando o MongoDB
[FONTE](https://www.oficinadanet.com.br/post/13367-instalando-mongodb-no-mac-os-x)
````bash
# Instalando no Mac
brew update
brew install mongodb

# Configurando o diretório de armazenamento das collections
sudo mkdir -p /data/db
sudo chown $(whoami) /data/db

# Configurando o PATH
touch ~/.bash_profile
nano ~/.bash_profile
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

# Iniciando o MongoDB na sessao
mongod
````

logar no mongo
````bash
mongo

> show dbs
````

Executando o PJ
````bash
npm i
npm start
````

com KNEX
````bash
sudo npm i -g knex
````

Reloading back-end enquanto estiver rodando
````bash
rs
````

## TD-TL para RUN Back-end
````bash
cd ~/www/vue-js-completo/22_pj6_knowledge/backend_final && postgres -D /usr/local/var/postgres
cd ~/www/vue-js-completo/22_pj6_knowledge/backend_final && mongod
cd ~/www/vue-js-completo/22_pj6_knowledge/backend_final && npm start
````

## Instalando o Front-end FINAL

````bash
cd 22_pj6_knowledge/frontend_final/
npm i
npm run serve -- --port 8081
````

## Instalando o Front-end a ser programado

````bash
cd 22_pj6_knowledge/frontend_final/
npm i
npm run serve
````

## Token
### Cadastro
````bash
curl -X POST \
  http://localhost:4000/signup \
  -H 'Content-Type: application/json' \
  -d '{
	"name":"Rafao",
	"email":"rafao@rafao.com",
	"password":"123456",
	"confirmPassword":"123456",
	"admin":"true"
}'
````

### Login
````bash
curl -X POST \
  http://localhost:4000/signin \
  -H 'Content-Type: application/json' \
  -H 'content-length: 52' \
  -d '{
	"email":"rafao@rafao.com",
	"password":"123456"
}'
````
