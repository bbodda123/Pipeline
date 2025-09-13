pipeline{
    agent any

    environment{
        IMAGE_NAME = ""
    }
    
    stages{
        stage("Test The Docker Compose Build...."){
            steps{
                sh '
                docker rm -f pipeline-sever-nodejs || true
                docker-compose up -d
                '
            }
        }
    }
}