pipeline {
    agent {
        docker {
            image 'node:18'
            args '-p 3000:3000' // port for viewing my app if iwant to view it 
        }
    }

    environment {
        APP_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                // gets our code 
                git branch: 'master', url: 'https://github.com/bbodda123/Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd app'
                sh 'npm install'
                sh 'npm install --save-dev supertest'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                sh 'npm start &'
                sleep 5
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
