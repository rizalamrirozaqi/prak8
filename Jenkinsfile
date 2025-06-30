/*
 * Pipeline deklaratif yang:
 * 1. Otomatis checkout repo (default Jenkins)
 * 2. Pakai container Node 20‑alpine
 * 3. Install dependensi → jalan‑kan unit test → (opsional) start app
 */
pipeline {
    agent {
        docker {
            image 'node:20-alpine'   // ringan & terbaru
            args '-p 3000:3000'      // ekspose PORT kalau mau tes manual
        }
    }

    environment {
        PORT = '3000'
        NODE_ENV = 'test'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'          // cepat & reproducible
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
            when { branch 'main' }   // jalankan hanya di branch utama
            steps {
                echo "Menjalankan aplikasi pada port ${PORT}…"
                // proses tetap hidup selama pipeline; untuk demo saja
                sh 'node app.js &'
            }
        }
    }
}
