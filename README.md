# freelatech-backend

- docker pull postgres
- docker volume create freelatech
- docker run -d -p 5432:5432 -v "freelatech:/var/lib/postgresql/data" -e POSTGRES_PASSWORD=postgres -e PRIMARY_USER=postgres postgres
