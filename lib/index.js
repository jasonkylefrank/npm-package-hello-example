/* This is the primary implementation of the module
   (except for command-line argument parsing - 
    see the script in bin for that)

    For further explanation about creating a globally-installable 
    package, see:
    (1) https://ourcodeworld.com/articles/read/393/how-to-create-a-global-module-for-node-js-properly
    (2) http://markmarkoh.com/nodejs-npm-and-executables/
*/

const hello = (name) => {
    return console.log(`Hello ${name}!  Have a great day!`);
};
// Can't use "export default hello" here (b/c no babel?)
exports.hello = hello;