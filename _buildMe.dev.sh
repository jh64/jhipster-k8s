echo ++++++++++++++++++++++++++++++++++++++
sudo rm -r -f ./target
#read -p "Press Enter to continue..."

echo ++++++++++++++++++++++++++++++++++++++
docker rmi my-app-ws:0.0.1-SNAPSHOT --force
docker image ls
#read -p "Press Enter to continue..."

echo ++++++++++++++++++++++++++++++++++++++
 sudo ./mvnw                spring-boot:build-image
#sudo ./mvnw package        verify jib:dockerBuild

docker image ls
#read -p "Press Enter to continue..."

echo ++++++++++++++++++++++++++++++++++++++
docker rmi                                u20041-kworker3-dev:5000/my-app-ws:0.0.1-SNAPSHOT
docker image tag my-app-ws:0.0.1-SNAPSHOT u20041-kworker3-dev:5000/my-app-ws:0.0.1-SNAPSHOT

docker image ls
#read -p "Press Enter to continue..."

echo ++++++++++++++++++++++++++++++++++++++
docker push u20041-kworker3-dev:5000/my-app-ws:0.0.1-SNAPSHOT
