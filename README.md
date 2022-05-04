# Todo List - Made with React & Spring Boot

## Backend

A Todolist REST API made with Spring Boot using the MVC pattern with CRUD functionalities

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

Clone the repository

```bash
$ git clone https://github.com/vitordutra/todo-list-springboot-react.git
```

Change to the backend directory

```bash
$ cd backend
```

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.vitordutra.todolistapi.Application` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```bash
mvn spring-boot:run
```

### Docker Compose

To use `docker-compose` with this app, follow these steps:

Be sure to have MySQL and Docker installed and running on your machine.

Change the active application.properties to `devmysql`

Build the app:

```bash
mvn install
```

Run the Docker Compose:

```bash
docker-compose up -d
```

## Frontend

A Todolist app with backend integration via REST API

### Techs

- React
- Material UI
- Axios

### Requirements

For building and running the application you need:

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

### Running the application locally

On the `frontend` folder, install the dependencies with the following command:

```bash
$ yarn
```

Run the project with

```bash
$ yarn start
```

## :page_facing_up: License

This project uses [MIT]() license.

## :man_technologist: Author

<p align="center">Developed with 🧠 by Vitor Dutra</p>

<p align="center">
  <a href="https://github.com/vitordutra"><img src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles" alt="Github" /></a>
  <a href="https://www.linkedin.com/in/vitor-dutra/"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitor-dutra" alt="LinkendIn" /></a>
  <a href="mailto:dutra.jvitor@gmail.com"><img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jvitor@gmail.com" alt="Gmail" /></a>
</p>
