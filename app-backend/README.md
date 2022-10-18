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
<root folder>
```

4. Build an image
```
docker build -t app-backend:v1 .
``` 

5. Run a instance of image
```
docker run --net mynetwork -t -p 8080:8080 --name app-backend-container app-backend:v1
```

6. Test your application (access by a expose port)
```
/imagens
http://ip172-18-0-86-cd4v7rv91rrg00c84q0g-8000.direct.labs.play-with-docker.com/imagens
```
