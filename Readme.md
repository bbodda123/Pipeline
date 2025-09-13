<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=170&section=header&text=Jenkins%-Pipeline&fontSize=50&animation=fadeIn&fontAlignY=38&descAlignY=55&descAlign=50" width="100%" />
</div>

# Pipeline

This repository contains a collection of DevOps pipeline configurations designed to automate and streamline the software development lifecycle.

## 🛠️ Technologies Used

- **Jenkins**: For continuous integration and deployment automation.
- **Docker**: To containerize applications for consistent environments.
- **Docker Compose**: For defining and running multi-container Docker applications.
- **Spring Framework**: A Java-based framework for building enterprise applications.

## 📁 Repository Structure

The repository includes the following key files and directories:

- **`Dockerfile`**: Defines the environment for building the application container.
- **`docker-compose.yml`**: Specifies the services, networks, and volumes for the application.
- **`Jenkinsfile`**: Contains the pipeline script for Jenkins to automate the build and deployment processes.
- **`Main.Jenkinsfile`**: An alternative or main Jenkins pipeline script.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`.env.app`**: Environment variables for the application.
- **`.env.mysql`**: Environment variables for MySQL configuration.
- **`spring/`**: Directory containing Spring Framework application files.

## 🚀 Getting Started

To get started with this pipeline setup:

1. **Clone the Repository**:

```bash
git clone https://github.com/bbodda123/Pipeline.git
cd Pipeline
```

2. **Configure Environment Variables**:

Ensure that your environment variables are set up correctly in the `.env.app` and `.env.mysql` files.

3. **Build and Run with Docker Compose**:

```bash
docker-compose up --build
```

4. **Set Up Jenkins**:

- Install Jenkins on your server.
- Create a new pipeline job and point it to your repository.
- Jenkins will automatically detect the `Jenkinsfile` or `Main.Jenkinsfile` and execute the pipeline.

Test the Ngrok
