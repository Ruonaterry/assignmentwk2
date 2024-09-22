// Function to greet a user
export function greet(name) {
  return `Hello, ${name}!`;
}

// Import the greet function from the module
import { greet } from './greet.js';

// Use the imported function
console.log(greet("Alice")); // Outputs: Hello, Alice!
