+++
sudo apt install openjdk-8-jdk

+++
host locally

./mvnw

+++
build docker image

./mvnw spring-boot:build-image

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
