# External Worker: Name

Short Description of the external worker

## How to use

### Deployment

Build your containerized Application

```docker build -t example-image:version .```

Run your containerized workload. Care: --network="host" allows your container to access hosts network. For Educational Purpose only, this is not recommended for production usage

```docker run --network="host" --name example-worker example-image:version```

## Subscribed topic

### example topic

example topic description

**Input Variables**

- exampleInputVariable

**Output Variables**

- exampleOutputVariable

 