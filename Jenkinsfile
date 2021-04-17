pipeline {
    environment {
        registry = "cuongnm3061997/todo_list_jenkins"
        registryCredential = "docker-key-hub"
        dockerImage = ''
        // scannerHome = tool 'sonarscan'
    }
    agent { label 'dev' } 
    // agent any
    stages {
        stage('Clone stage') {
            steps {
                git branch: 'master', url: 'https://github.com/nguyencuong30697/todolist_cicd.git'
            }
        }
        // stage('Install Lib stage') {
        //     steps {
        //         sh 'npm i'
        //     }
        // }
        // stage('Test stage') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        stage('Build stage') {
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Push Image stage') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Run Docker Image') {
            steps{
                sh 'docker-compose up -d'
            }
        }
        stage('Remove Unused Docker Image') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
        // stage('Check Project stage') {
        //     steps{
        //         withSonarQubeEnv('nodejs_demo') { sh "${scannerHome}/bin/sonar-scanner"
        //         }
        //     }
        // }
        // stage('waitForQualityGate stage') {
        //     steps{
        //         waitForQualityGate abortPipeline: true
        //     }
        // }
        // stage('Build stage') {
        //     steps{
        //         sh 'docker build -t nodejsnhe .'
        //         sh 'docker-compose up -d'
        //     }
        // }
        // stage('Test stage') {
        //     steps {
        //         sh label: '', script: 'export URL=http://13.229.243.239:8185 && npm install --save-dev codeceptjs@2.6.10 puppeteer && npx codeceptjs run --steps'
        //     }
        // }
        // stage('Push Image stage') {
        //     steps {
        //         script {
        //             docker.withRegistry( '', registryCredential ) {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
        // stage('Run Docker Image') {
        //     steps{
        //         sh "docker run --rm -p 8180:8080 $registry:$BUILD_NUMBER"
        //     }
        // }
        // stage('Remove Unused Docker Image') {
        //     steps{
        //         sh "docker rmi $registry:$BUILD_NUMBER"
        //     }
        // }
    }
     post {
        always {
            junit 'test.xml'
            emailext body: '${DEFAULT_CONTENT}', subject: '${DEFAULT_SUBJECT}', to: 'nguyencuong.3061997@gmail.com'
        }
        success {
            echo 'I succeeded!'
        }
    }
}