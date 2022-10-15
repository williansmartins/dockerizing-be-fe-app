# BE - Java
. copy of old project

# FE - Angular
. copy of old project

# DB - MYSQL
1. docker build -t app-mysql:v1 .
2. docker run --name app-mysql --hostname app-mysql -d -e MYSQL_ROOT_PASSWORD=mypassword app-mysql:v1
3. docker exec -it app-mysql mysql -u root -pmypassword mydatabase

