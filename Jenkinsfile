// Define the Jenkins pipeline
pipeline {
    // Agent: Specifies where the pipeline will run.
    // 'any' means Jenkins will allocate an executor on any available agent.
    agent any

    // Stages: A block that contains a sequence of distinct stages.
    stages {
        // Stage 1: Clone Repository
        // This stage is responsible for fetching the source code from the Git repository.
        stage('Clone Repository') {
            steps {
                // Git SCM: Clones the specified Git repository.
                // Ensure the URL is correct and accessible by the Jenkins agent.
                git url: 'https://github.com/rizalamrirozaqi/prak8.git', branch: 'main'
            }
        }

        // Stage 2: Build
        // This stage installs the Node.js application's dependencies.
        stage('Build') {
            steps {
                // Shell command: Executes 'npm install' to download and install
                // all packages listed in package.json.
                sh 'npm install'
            }
        }

        // Stage 3: Test
        // This stage runs the unit tests for the application.
        stage('Test') {
            steps {
                // Shell command: Executes 'npm test'.
                // This assumes you have a 'test' script defined in your package.json.
                sh 'npm test'
            }
            // Post-build actions: Defines actions to take after the stage completes,
            // based on the stage's outcome (success, failure, always, etc.).
            post {
                // If the 'Test' stage succeeds.
                success {
                    echo 'Tes berhasil! (Tests successful!)'
                }
                // If the 'Test' stage fails.
                failure {
                    echo 'Tes gagal! (Tests failed!)'
                }
            }
        }

        // Stage 4: Deploy
        // This stage simulates deploying and running the Node.js application.
        // NOTE: Running 'node app.js &' in a Jenkins pipeline will keep the job
        // running indefinitely or until the process is manually killed.
        // For actual deployment, you might use Docker, Kubernetes, or a dedicated
        // deployment tool/script.
        stage('Deploy') {
            steps {
                // Echo message to the console.
                sh 'echo "Menjalankan aplikasi..." (Running the application...)'
                // Run the Node.js application in the background.
                // This is generally NOT recommended for production deployments directly
                // within a Jenkins job, as it ties up the executor.
                sh 'node app.js &'
            }
        }
    }
}
