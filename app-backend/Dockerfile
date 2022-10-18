FROM maven:3-openjdk-8 as builder
COPY . /app
WORKDIR /app
RUN mvn package

FROM openjdk:8-jdk-alpine as runner

COPY --from=builder /app/target/*.jar app.jar

# FROM openjdk:8-jdk-alpine
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]