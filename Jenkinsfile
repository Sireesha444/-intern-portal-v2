pipeline {
    agent any

    environment {
        IMAGE_NAME = 'intern-portal:latest'
        CONTAINER_PORT = '3000'
    }

    stages {
        stage('Checkout Repository') {
            steps {
                // Checkout the main branch explicitly
                git branch: 'main', url: 'https://github.com/Sireesha444/-intern-portal-v2.git'
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
                echo "Building Docker image ${IMAGE_NAME}..."
                bat "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running Docker container on port ${CONTAINER_PORT}..."
                // Stop existing container if already running
                bat '''
                for /f "tokens=*" %%i in ('docker ps -q -f "ancestor=${IMAGE_NAME}"') do docker stop %%i
                '''
                // Run new container
                bat "docker run -d -p ${CONTAINER_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}"
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
