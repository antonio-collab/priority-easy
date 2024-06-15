#!/bin/sh

# Inicializar banco de dados PostgreSQL
docker-entrypoint.sh postgres

# Executar aplicativo AdonisJS
node ace serve --port 3000
