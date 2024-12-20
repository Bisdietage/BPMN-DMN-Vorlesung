# Camunda Education Image

## General Info

This is an easy-to-use, stripped-down Camunda 7 image intended for educational purposes. It uses an in-memory H2 database for storage, with no example processes deployed and no initial user configured.

[Official Camunda Webiste](https://camunda.com)

## How to Use

Build your image via docker:

```docker build . -t camunda:education```

Run your Camunda 7 Education Container via docker:

```docker run -d --name camunda-education -p 30000:8080 camunda:education```

Access your camunda deployment via [Local Camunda Deployment](http://localhost:30000/camunda)