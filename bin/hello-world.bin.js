#!/usr/bin/env node
// The first line above says to use NODE to run this module

// Import the actual module implementation
const helloApp = require('../lib/index');

// Prepare an argument for our library function
let name = '';
/* Get the name from the command-line args, if it was passed.
   Note about arguments: 
    * Arg #1 is "node" (even though the user won't
        have to type that if this module is installed)
    * Arg #2 is the name of this module.
    * So the first real "user arg" is arg #3
*/
if (process.argv.length > 2) {
    name = process.argv[2];
}

// Call our library function.
helloApp.hello(name);

if (process.argv.length < 3) {
    console.log ('\nPro-tip: Try passing in an argument next time. 😀');
}