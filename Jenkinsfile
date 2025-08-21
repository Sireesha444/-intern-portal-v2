pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sireesha444/-intern-portal-v2.git'
            }
        }
        stage('Check Docker') {
            steps {
                bat '''
                echo Checking if Docker is running...
                docker info || (echo Docker is not running. Please start Docker Desktop! & exit /b 1)
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t intern-portal:latest .'
            }
        }
        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 intern-portal:latest'
            }
        }
    }
    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check logs for details.'
        }
    }
}
