### Dockerizing an Back End application (using Java)

1. Use a local Docker or a online service like:
```
https://labs.play-with-docker.com/
```

2. Create a new project or downloading a existing project:
```
cd app-backend
```

3. Set a Docker file
```
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

4. Generate image
```
mvn package
```

5. Build an image
```
docker build -t app-backend:v2 .
``` 

6. Run a instance of image
```
docker run --net mynetwork -t -p 8080:8080 --name app-backend-container app-backend:v1
```

6. Test your application (access by a expose port)
```
http://ip172-18-0-86-cd4v7rv91rrg00c84q0g-8000.direct.labs.play-with-docker.com/users
```
