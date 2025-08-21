pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myproject:latest .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 myproject:latest'
            }
        }
    }
}
