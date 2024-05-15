const fs = require('fs');

// Using 'utf8' encoding to directly get a string from readFileSync
const data = fs.readFileSync('test.json', 'utf8');
const json = JSON.parse(data);

// Assuming json is an array and you want to log its length
console.log(Array.isArray(json) ? json.length : 'Not an array');
