# BE - Java
```
README.md on backend project
```

# FE - AngularJS
```
README.md on frontend project
```

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
