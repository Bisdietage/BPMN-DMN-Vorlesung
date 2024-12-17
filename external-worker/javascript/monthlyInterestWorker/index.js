import { Variables, Client, logger } from "camunda-external-task-client-js";

// Configuration for the external task client
// Adjust the baseUrl to match your Camunda REST endpoint.
// For example, if Camunda is running locally on port 8080, use:
// baseUrl: 'http://localhost:8080/engine-rest'
const config = { 
  baseUrl: 'http://localhost:30000/engine-rest', 
  use: logger
};

// Create a client instance with given configuration
const client = new Client(config);

// Subscribe to a topic (e.g. 'uppercase')
client.subscribe('calculateMonthlyRate', async ({ task, taskService }) => {
  // Retrieve variables
  const months = task.variables.get('months');
  const sum = task.variables.get('sum');
  const interest = task.variables.get('interest');

  // Convert annual interest percentage to monthly interest rate
  // interest is given as a percentage, e.g. 5 means 5%
  const monthlyInterest = (interest / 100) / 12;

  // Calculate monthly payment using the amortization formula
  // C = P * [r / (1 - (1+r)^(-n))]
  const monthlyRate = sum * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -months)));

  console.log(`Calculated monthly rate: ${monthlyRate.toFixed(2)}`);
  
  const localVariables = new Variables();
  localVariables.set("monthlyRate", monthlyRate);

  // Complete the task and provide the new variable
  await taskService.complete(task, {}, localVariables);
  
  console.log(`Processed "exampleString": ${exampleString} -> ${uppercasedString}`);
});