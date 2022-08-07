pipeline {
    agent any
    stages {

        stage("docker build") {
            steps {
                sh "docker build -t php-news:develop ."
                sh "docker push php-news:develop"
            }
        }

        stage("docker run") {
            steps {
                sh "docker ps -f name=php-news-develop -q | xargs --no-run-if-empty docker container stop"
                sh "docker container ls -a -f name=php-news-develop -q | xargs -r docker container rm"
                sh "docker run -d --name php-news-develop --network registry-net php-news:develop"
            }
        }
    }
}