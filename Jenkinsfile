node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("jenkinsproject/cicd-node-application")
    }

    stage('Test image') {
        app.withRun{ c ->
          sh "docker exec  ${c.id} npm install"
          sh "docker exec  ${c.id} npm run test-exp"
          sh "mkdir -p test/results/"
          sh "docker cp ${c.id}:/code/test/results/test-results.xml test/results/test-results.xml"
        }
    }

    stage('Publish test results') {

      /*Save test results in Jenkins history */
        junit 'test/results/test-results.xml'
    }


    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Deploy to K8s') {
      sh "kubectl apply -f ./deploymentservice.yaml"
      sh "kubectl set image deployment cicd-node-application cicd-node-application=jenkinsproject/cicd-node-application:latest"
    }

}