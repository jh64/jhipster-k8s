+++
sudo apt install openjdk-8-jdk

+++

host locally

./mvnw

+++
build docker image

./mvnw spring-boot:build-image
./mvnw -Pprod spring-boot:build-image

--
docker image tag my-app-ws:0.0.1-SNAPSHOT localhost:5000/my-app-ws:0.0.1-SNAPSHOT
docker image tag myappws:latest localhost:5000/my-app-ws:0.0.1-SNAPSHOT

docker push localhost:5000/my-app-ws:0.0.1-SNAPSHOT

--
To update the image:

docker rmi u20041-kworker3-dev:5000/my-app-ws:0.0.1-SNAPSHOT
docker pull u20041-kworker3-dev:5000/my-app-ws:0.0.1-SNAPSHOT

--
to debug pod:

kubectl logs [podname] -p

+++
deploy the image and expose the service

kubectl run my-app-ws --image=my-app-ws:0.0.1-SNAPSHOT --port=8080 --image-pull-policy=Never
kubectl expose pod my-app-ws --type=NodePort

+++
test

minikube service my-app-ws

---

clean-up

kubectl delete svc my-app-ws
kubectl delete pod my-app-ws

+++
docker build and test

sudo ./mvnw package -Pprod verify jib:dockerBuild
sudo ./mvnw -Pprod package verify jib:dockerBuild --offline

--
run the app on local docker container

sudo docker-compose -f src/main/docker/app.yml up -d

serve the DB:

sudo docker-compose -f src/main/docker/postgresql.yml up

sudo netstat -lnp | grep docker
sudo kill xxxx

--
run the app on k8s

docker pull postgres:12.3
