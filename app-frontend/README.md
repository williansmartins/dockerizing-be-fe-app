### Dockerizing an Front End application (using Angular)

1. Use a local Docker or a online service like:
```
https://labs.play-with-docker.com/
```

2. Create a new project or downloading a existing project:
```
cd app-frontend
```

3. Set a Docker file
```
FROM nginx:1.17.1-alpine
COPY . /usr/share/nginx/html
```

4. Build an image
```
docker build -t app-frontend:v1 .
```

5. Run a instance of image
```
docker run --name app-frontend-container -d -p 8085:80 app-frontend:v1
```

6. Test your application (access by a expose port)
```
http://localhost:8085/#!/imagens
ou
http://ip172-18-0-39-cd4qscv91rrg00c84k00-8085.direct.labs.play-with-docker.com/

```
