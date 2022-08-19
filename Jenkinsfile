Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:16.11.47' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}