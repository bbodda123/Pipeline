pipeline{
    agent any

    environment{
        IMAGE_NAME = ""
    }
    
    stages{
        stage("Test The Docker Compose Build...."){
            steps{
                sh 'docker-compose up -d'
            }
        }
    }
}