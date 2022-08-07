pipeline {
    agent any
    stages {

        stage("docker build") {
            steps {
                sh "docker build -t ${DOCKER_HOST}/${DOCKER_ID}/php-news:develop ."
                sh "docker push ${DOCKER_HOST}/${DOCKER_ID}/php-news:develop"
            }
        }

        stage("docker run") {
            steps {
                sh "docker ps -f name=php-news-develop -q | xargs --no-run-if-empty docker container stop"
                sh "docker container ls -a -f name=php-news-develop -q | xargs -r docker container rm"
                sh "docker run -d --name php-news-develop --network registry-net ${DOCKER_HOST}/${DOCKER_ID}/php-news:develop"
            }
        }
    }
}