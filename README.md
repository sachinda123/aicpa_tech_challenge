# Project Setup and Execution Guide

## Prerequisites

###### Docker Docker:

Ensure Docker is installed on your system. If not, download and install it from the official Docker website.

### Getting Started

###### Clone the Repository:

Open your terminal and execute:
git clone (https://github.com/sachinda123/aicpa_tech_challenge "git@github.com:sachinda123/aicpa_tech_challenge.git")
Navigate to the Project Directory:

```sh
cd <project_folder>
```

Open the Project in Your Preferred Editor:

###### Launch your code editor (e.g., Visual Studio Code) and open the project directory.

##### Running the Application

The application can be run in two modes: Development and Production.

### 1. Development Mode

This mode is intended for development purposes, allowing for hot-reloading when code changes are made.

Steps:

1. Modify docker-compose.yml: Open the docker-compose.yml file and locate the service configuration for your application. Update the command property as follows:

```sh
command: sh -c "npm install && npm run dev"
```

This command ensures that dependencies are installed, and the application runs in development mode.
Tools like ts-node are used to watch for code changes and reload the application automatically.

Start the Application: In the terminal, from the project root directory, execute:

```sh
docker-compose up

```

Docker will build the images and start the containers. Once completed, you should see a message indicating that the application is running.

#### Run Test Cases: To execute the test cases:

List all running containers:

```sh
docker ps
```

Identify the container ID associated with your application service.
Access the container's shell:

```sh
docker exec -it <container_id> sh

```

Inside the container, run:

```sh
npm run test
```

This will execute the test suite, and the results will be displayed in the terminal.

### 2. Production Mode

This mode is used to deploy the application in a production environment.

Steps:

Modify docker-compose.yml: Open the docker-compose.yml file and update the command property for your application service:

```sh
command: sh -c "npm install && npm run build && npm run start"

```

This command installs dependencies, builds the application, and starts it in production mode.

Start the Application: In the terminal, from the project root directory, execute:

```sh
docker-compose up --build

```

### Testing end points

To retrieve the list of pages with their view counts:

Send a GET request to http://localhost:3000/page-views-count using your preferred HTTP client (e.g., curl, Postman, or a web browser).

Receive the JSON response, which contains the pages sorted by view count in descending order.

```sh
[
  {
    "pageName": "/contact",
    "totalViews": 71
  },
  {
    "pageName": "/home",
    "totalViews": 69
  },
  {
    "pageName": "/index",
    "totalViews": 67
  },
  {
    "pageName": "/products",
    "totalViews": 67
  },
  {
    "pageName": "/products/1",
    "totalViews": 64
  },
  {
    "pageName": "/about",
    "totalViews": 58
  },
  {
    "pageName": "/products/3",
    "totalViews": 54
  },
  {
    "pageName": "/products/2",
    "totalViews": 50
  }
]

```

To retrieve the list of pages with their unique view counts:

Send a GET request to http://localhost:3000/unique-page-views using your preferred HTTP client (e.g., curl, Postman, or a web browser).

Receive the JSON response, which contains the pages sorted by view count in descending order.

```sh
[
  {
    "pageName": "/contact",
    "totalViews": 60
  },
  {
    "pageName": "/home",
    "totalViews": 58
  },
  {
    "pageName": "/products",
    "totalViews": 58
  },
  {
    "pageName": "/index",
    "totalViews": 53
  },
  {
    "pageName": "/products/1",
    "totalViews": 52
  },
  {
    "pageName": "/products/3",
    "totalViews": 48
  },
  {
    "pageName": "/about",
    "totalViews": 47
  },
  {
    "pageName": "/products/2",
    "totalViews": 43
  }
]


```

:beetle: Thank you! I hope you enjoy coding. :smiley:
