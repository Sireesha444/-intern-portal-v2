pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Sireesha444/-intern-portal-v2.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t intern-portal:latest .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop old container if running
                    sh 'docker ps -q --filter "name=intern-portal" | grep -q . && docker stop intern-portal && docker rm -f intern-portal || true'

                    // Run new container
                    sh 'docker run -d --name intern-portal -p 3000:3000 intern-portal:latest'
                }
            }
        }
    }
}
