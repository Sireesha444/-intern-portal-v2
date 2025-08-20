pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Sireesha444/-intern-portal-v2.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Package Backend') {
            steps {
                dir('backend') {
                    sh 'npm run build || echo "No build step for backend"'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploy step goes here (Docker, server copy, or cloud deploy)'
            }
        }
    }
}
