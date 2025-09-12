pipeline {
    agent any

    environment {
        // Name Of Docker Image
        IMAGE_NAME = "node-demo"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/bbodda123/Pipeline.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Run Container') {
            steps {
                // Stop old container if exists, then run new
                sh '''
                  docker rm -f node-demo || true
                  docker run -d -p 3000:3000 --name node-demo $IMAGE_NAME
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished!"
        }
    }
}
