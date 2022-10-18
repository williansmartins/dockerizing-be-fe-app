# BE - Java
```
README.md próprio
```

# FE - AngularJS
```
README.md próprio
```

# Creating a network
```
docker network create mynetwork
--net mynetwork (inside run command)
```

# DB - MYSQL
```
1. docker build -t app-mysql:v1 .
2. docker run --net mynetwork -p 33061:3306 --name app-mysql --hostname app-mysql -d -e MYSQL_ROOT_PASSWORD=mypassword app-mysql:v1
3. docker exec -it app-mysql mysql -u root -pmypassword mydatabase
```
