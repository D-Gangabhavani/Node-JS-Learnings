// Import Node.js built-in OS module
import os from "os";

console.log("Platform:", os.platform()); 
// Returns the operating system platform (e.g., win32 for Windows)

// Returns the computer's CPU architecture (e.g., x64)
console.log("Architecture:", os.arch());

// Returns the total amount of system memory (RAM) in bytes
console.log("Total memory:", os.totalmem());

// Returns the amount of currently available/free memory in bytes
console.log("Free memory:", os.freemem());

// Returns the current user's home directory path
console.log("Home directory:", os.homedir());