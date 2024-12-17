# External Worker: Uppercase Worker

Example external worker, that takes the "exampleString" value and transfers all letters to uppercase

## How to use

### Deployment

Build your containerized Application

```docker build -t uppercase-worker:v1 .```

Run your containerized workload. Care: --network="host" allows your container to access hosts network. For Educational Purpose only, this is not recommended for production usage

```docker run --network="host" --name uppercase-worker uppercase-worker:v1```

## Subscribed topic

### uppercase

Takes a string value and transforms all letters to uppercase

**Input Variables**

- exampleString

**Output Variables**

- uppercasedString



 