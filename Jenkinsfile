pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
                sh 'node --max-old-space-size=128 npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}