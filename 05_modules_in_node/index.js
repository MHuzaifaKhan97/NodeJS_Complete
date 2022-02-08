// Core Module: Modules which is already defined in a language
// Example: fs, HTTP, Buffer etc

// Global Module: No need to import for example console

console.log("Hey")
console.log("Dir Name: ",__dirname);
console.log("File Name: ",__filename);
// Non-Global Module: Need to import

const fs = require('fs')

fs.writeFileSync("firstFile.txt","This a file creating using Node FS")