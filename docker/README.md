# Local MySQL for Doxy

This folder provides a docker-compose setup for running a MySQL 8 container that matches the defaults configured in `doxy/src/main/resources/application.yml`.

## Quick start

```bash
cp docker/.env.example docker/.env  # optional, only if you want to override defaults
cd docker
docker compose up -d
```

The Spring Boot app points to `jdbc:mysql://localhost:3306/doxy` with username/password `doxy/doxy` by default. Adjust the following environment variables if you need to customize it:

- `MYSQL_DATABASE`
- `MYSQL_USER`
- `MYSQL_PASSWORD`
- `MYSQL_ROOT_PASSWORD`
- `MYSQL_PORT`

Once the container is running, you can verify it with:

```bash
docker compose ps
docker exec -it doxy-mysql mysql -u root -p
```

Remember to stop the database when you’re done:

```bash
cd docker
docker compose down
```
