# BE - Java
[Readme link](https://github.com/williansmartins/dockerizing-be-fe-app/blob/main/app-backend/README.md)


# FE - AngularJS
[Readme link](https://github.com/williansmartins/dockerizing-be-fe-app/blob/main/app-frontend/README.md)

# Creating a network
```
docker network create mynetwork
--net mynetwork (inside run command)
```

# DB - MYSQL
```
1. cd app-mysql
2. docker build -t app-mysql:v1 .
3. docker run --net mynetwork -p 33061:3306 --name app-mysql --hostname app-mysql -d -e MYSQL_ROOT_PASSWORD=mypassword app-mysql:v1
4. docker exec -it app-mysql mysql -u root -pmypassword mydatabase
```

4. TroubleShooting - Frontend  
$ kubectl get namespaces
$ kubectl config set-context --current --namespace=mysql-namespace
$ kubectl get pods --namespace=mysql-namespace
$ kubectl delete pod frontend-deployment-7df796d778-jhwqx frontend-deployment-7df796d778-xzckv
$ kubectl logs -f frontend-deployment-7df796d778-qdmjw
$ kubectl logs -f backend-deployment-bb784c456-b4vzw
$ kubectl exec -it backend-deployment-7d64b7866-kszhw frontend-deployment-7df796d778-qdmjw -- bin/sh
$ minikube service frontend-service --url -n frontend-namespace
$ minikube service backend-service --url -n backend-namespace
$ docker image tag app-backend:v1 williansmartins/app-backend:v1

#para acessar o banco de dados via properties do backend
servico.namespace