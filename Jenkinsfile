pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone your GitHub repo
                git branch: 'main', url: 'https://github.com/Sireesha444/-intern-portal-v2.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image for your project
                bat 'docker build -t intern-portal:latest .'
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop old container if running
                    bat '''
                    docker ps -q --filter "name=intern-portal" | findstr . >nul
                    if %ERRORLEVEL%==0 (
                        docker stop intern-portal
                        docker rm -f intern-portal
                    )
                    '''

                    // Run new container
                    bat 'docker run -d --name intern-portal -p 3000:3000 intern-portal:latest'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful! Access app at http://localhost:3000'
        }
        failure {
            echo '❌ Deployment failed. Check logs for details.'
        }
    }
}
