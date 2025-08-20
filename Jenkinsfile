pipeline {
  agent any

  tools {
    nodejs "NodeJS"
  }

  environment {
    MONGO_URI = credentials('MONGO_URI')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Sireesha444/-intern-portal-v2.git'
      }
    }

    stage('Install & Build Server') {
      steps {
        dir('server') {
          sh 'npm install'
          sh 'npm run build' // or 'npm start' if you have a build script
          sh 'npm test'
        }
      }
    }

    stage('Install & Build Client') {
      steps {
        dir('client') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'client/build/**', fingerprint: true
      }
    }

    stage('Deploy (optional)') {
      steps {
        echo "Deploying your MERN application... configure as needed"
      }
    }
  }
}
