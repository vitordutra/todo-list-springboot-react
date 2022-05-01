# Todo List - Made with React & Spring Boot

## Backend

A task management REST API made with Spring Boot using the MVC pattern with CRUD functionalities

### Techs

- Java 11
- Spring Boot
- Swagger
- H2 Database
- PostgreSQL
- MySQL
- Docker

### Features

- Create a task
- List all tasks
- List task by ID
- Update Task by ID
- Delete task by ID

Api Doc available at `/swagger-ui.html`

### Requirements

For building and running the application you need:

- [JDK 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)
- [Maven 3](https://maven.apache.org)
- (Optional) [MySQL](https://www.mysql.com/downloads/)
- (Optional) [Docker](https://www.docker.com/)

### Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.vitordutra.todolistapi.Application` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

### Docker Compose

To use `docker-compose` with this app, follow these steps:

Be sure to have MySQL and Docker installed and running on your machine.

Change the active application.properties to `devmysql`

Build the app:

```shell
mvn install
```

Run the Docker Compose:

```shell
docker-compose up -d
```

## Frontend
