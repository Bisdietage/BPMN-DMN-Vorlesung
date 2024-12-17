import { Variables, Client, logger } from "camunda-external-task-client-js";

// Configuration for the external task client
// Adjust the baseUrl to match your Camunda REST endpoint.
// For example, if Camunda is running locally on port 8080, use:
// baseUrl: 'http://localhost:8080/engine-rest'
const config = { 
  baseUrl: 'http://localhost:8080/engine-rest', 
  use: logger
};

// Create a client instance with given configuration
const client = new Client(config);

// Subscribe to a topic (e.g. 'templateWorker')
client.subscribe('templateWorker', async ({ task, taskService }) => {
  
  // ----- Your Business Code -----

  
  
  // Adjust Variables
  const localVariables = new Variables();
  
  // ----- End of Business Code -----

  // Complete the task and provide the new variable
  await taskService.complete(task, {}, localVariables);
  
  console.log(`Processed "exampleString": ${exampleString} -> ${uppercasedString}`);
});