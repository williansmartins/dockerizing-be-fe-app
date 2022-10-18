# BE - Java
```
. copy of old project
```

# FE - Angular
```
. copy of old project
```

# Creating a network
```
docker network create mynetwork
--net mynetwork (inside run command)
```

# DB - MYSQL
```
1. docker build -t app-mysql:v1 .
2. docker run -p 33061:3306 --name app-mysql --hostname app-mysql -d -e MYSQL_ROOT_PASSWORD=mypassword app-mysql:v1
3. docker exec -it app-mysql mysql -u root -pmypassword mydatabase
```
