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

RUN apk update && apk upgrade && apk add bash
RUN mkdir -p /usr/local/dockerize

ADD  @project.build.finalName@.jar /usr/local/dockerize/

ADD run.sh run.sh

RUN chmod +x run.sh

CMD ./run.sh
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
docker run -t -p 8081:8080 --name app-backend-container2 app-backend:v2
```

6. Test your application (access by a expose port)
```
http://ip172-18-0-86-cd4v7rv91rrg00c84q0g-8000.direct.labs.play-with-docker.com/users
```
