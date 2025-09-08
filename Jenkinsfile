pipeline {
    agent any

    environment {
        APP_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                // get my code 
                echo '>>> Getting the app...'
                git branch: 'master', url: 'https://github.com/bbodda123/Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '>>> Installing the Dependencies...'
                sh 'cd app && npm install && npm install --save-dev supertest'
            }
        }

        stage('Run Tests') {
            steps {
                echo '>>> Testing the app...'
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                echo '>>> Starting the app...'
                sh 'npm start &'
                sleep 3
                sh 'curl http://localhost:3000 || true'  // basic health check
            }
        }
    }

    post {
        always {
            echo '-------------------------------------'
        }
        success {
            echo 'Pipeline completed successfully 🎉'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
