// 킹받는다. DOCKER_HOST가 예약된 환경변수 였다니.......................
// ERROR 
// Cannot connect to the Docker daemon at tcp://register.domain.com:2375. Is the docker daemon running?

pipeline {
    agent any
    stages {

        stage("docker build") {
            steps {
                sh "docker build -t ${DOCKER_HOST_URL}/${DOCKER_USERNAME}/php-news:develop ."
            }
        }

        stage("docker push") {
            steps {
                sh "docker push ${DOCKER_HOST_URL}/${DOCKER_USERNAME}/php-news:develop"
            }
        }          

        stage("docker stop") {
            steps {
                sh "docker ps -f name=php-news-develop -q | xargs --no-run-if-empty docker container stop"
                sh "docker container ls -a -f name=php-news-develop -q | xargs -r docker container rm"
            }
        }

        stage("docker run") {
            steps {
                sh "docker run -d --name php-news-develop --network registry-net ${DOCKER_HOST_URL}/${DOCKER_USERNAME}/php-news:develop"
            }
        }
    }
}