FROM postgres:14

WORKDIR /var/lib/postgresql/data

COPY initdb.sql .

