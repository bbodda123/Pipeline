pipeline {
    agent any
    
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
        stage('Run Container') {
            steps {
                // Stop old container if exists, then run new
                sh '''
                  docker rm -f node-pipeline || true
                  docker run -d -p 3000:3000 --name node-pipeline node:18
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
