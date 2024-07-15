FROM openjdk:17-jdk-alpine
WORKDIR /ipify
COPY target/ipify-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]