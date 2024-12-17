# External Worker: Monthly Interest Calculator

Calculates the monthly interest rate based on a total credit sum, the interest rate and the duration of the credit in months

## How to use

### Deployment

Build your containerized Application

```docker build -t interest-calculator:v1 .```

Run your containerized workload. Care: --network="host" allows your container to access hosts network. For Educational Purpose only, this is not recommended for production usage

```docker run --network="host" --name interest-calculator interest-calculator:v1```

## Subscribed topics

### calculateMonthlyRate

Calculate monthly interest rate. 

**Input Variables**

- months 
- sum 
- interest

**Output Variables**

- monthlyRate

 