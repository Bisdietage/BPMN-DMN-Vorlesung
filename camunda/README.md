# Camunda Education Image

## General Info

An easy to use stripped Camunda 7 Image for Education image, an in memory H2 database is used for storage.
No example processes deployed and no initial user. 

[Official Camunda Webiste](https://camunda.com)

## How to Use


```docker build . -t camunda:education```

```docker run -d --name camunda-education -p 30000:8080 camunda:education```

Access your camunda deployment via [Local Camunda Deployment](http://localhost:30000/camunda)