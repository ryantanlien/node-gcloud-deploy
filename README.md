# Trivial Express Google Cloud and Continous Deployment
Welcome to the repository! Most likely, if your are visiting this repository, you are coming from CS3219 Software Engineering from NUS, doing one of the labs on Continous Deployment.

This repository serves as a guide to get your basic containerized Node.js application deployed on Google Cloud. Of course, any application can be deployed to Google Cloud with Docker but I have chosen to use Express and Node.js as these are what I am familiar with.

## Prerequisites
There are certain prequisites that one needs to have before attempting this guide. These are listed down below.

### Software Versions
Please do use whatever software versions are comfortable for you. Do note however that additional configuration and dependency management will be required if you decide to use versions different from the one in this repository.
- `Node.js v14.17.3`
- `Node Package Manager v8.13.2`

### Accounts Required
1. Docker Hub
2. Google Cloud Free Trial (Note that it is valid only for 90 days)

### Software Required
1. Docker Desktop
2. Node.js
3. npm

### Skills Required
1. Basic Docker commands
2. An understanding of how Docker works

## Deploying on Google Cloud Run with no Continous Deployment
Lets say that you have an existing node application that you wish to deploy on Google Cloud. This node application can be containerized and deployed. 

I will be using the trivial Express Node.js server in the `app` directory as the deployment example.

### Creating a Docker Hub Repository
1. Go to Docker Hub at https://hub.docker.com/
2. Log in
3. Create a public repository, preferably with the same name as your application. This will be the same name as your container.

We will push built containers to the repository above.

### Building the Container
- Navigate to the `app` directory or whichever folder your app is located in.
- Ensure that there is a Dockerfile within the directory if you are writing your own or alternatively, use the one that I have provided. (Some configuration may be needed to fit your own application)
- Run the following commands:
  - `docker build . -t {dockerhubusername}/{app-name}:{tag-name}`
  - This command builds the docker image that we will push to Docker Hub (A repository for your containers just as GitHub is a repository for your code)

### Pushing the Container to Docker Hub
- Carrying on from the *Building the Container* section, run the following commands:
  - `docker push {dockerhubusername}/{app-name}:{tag-name}`

I used ryantanlien99/trivial-express:01 as the overall designation for the container and you will see it appear under the tags section in the repository.

### Deploying the Container to Google Cloud Run
1. Go to Google Cloud Dashboard
2. Go to Google Cloud Run
3. Create a service and place `{dockerhubusername}/{app-name}:{tag-name}` as the Container URL when setting up the service. Google Cloud will automatically fetch the Docker Container for you.