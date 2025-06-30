pipeline {
    agent any

    tools {
        nodejs 'Node20'   // Sesuaikan dengan nama tool Node.js yang kamu daftarkan di Jenkins
    }

    environment {
        PORT = '3000'
        NODE_ENV = 'test'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'          // lebih cepat & konsisten daripada npm install
            }
        }

        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
            post {
                success { echo '✓ Semua tes lolos' }
                failure { echo '✗ Tes gagal' }
            }
        }

        stage('Run (only on main)') {
            when {
                branch 'main'
            }
            steps {
                echo "Menjalankan aplikasi pada port ${PORT}…"
                sh 'nohup node app.js > output.log 2>&1 &'
            }
        }
    }
}
