pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/cravengithub/node-app.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'   // asumsi sudah ada unit test
            }
            post {
                success { echo 'Tes berhasil!' }
                failure { echo 'Tes gagal!' }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Menjalankan aplikasi…'
                // jalankan di background; nohup mencegah proses mati saat stage selesai
                sh 'nohup node app.js &'
            }
        }
    }
}
