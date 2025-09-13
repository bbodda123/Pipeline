pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "node:18"
    }
    stages {
        stage('Build & Test') {
            agent {
                docker {
                    image 'node:18'
                    args '-v $WORKSPACE:/app -w /app'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            agent any
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
