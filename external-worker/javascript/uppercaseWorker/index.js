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
client.subscribe('uppercase', async ({ task, taskService }) => {
  // Fetch the variable "exampleString"
  const exampleString = task.variables.get('exampleString');

  // Convert to uppercase (ensure exampleString is a valid string)
  const uppercasedString = (exampleString || '').toUpperCase();
  
  const localVariables = new Variables();
  localVariables.set("uppercasedString", uppercasedString);

  // Complete the task and provide the new variable
  await taskService.complete(task, {}, localVariables);
  
  console.log(`Processed "exampleString": ${exampleString} -> ${uppercasedString}`);
});
