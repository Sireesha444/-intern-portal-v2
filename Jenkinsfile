pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Sireesha444/-intern-portal-v2.git'
            }
        }

        stage('Install Client Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Client') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Install Server Dependencies') {
            steps {
                dir('server') {
                    sh 'npm install'
                    sh 'npm run build' // or "tsc" if you use TypeScript
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'client/build/**, server/dist/**', fingerprint: true
            }
        }
    }
}
