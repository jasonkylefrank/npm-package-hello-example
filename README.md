# npm-package-hello-example

This is an example of how to create an executable NPM package which can be installed globally on a user's machine.  This means that after a user installs it, they can call the program on their command-line from **any location** on the their filesystem like this:

```
> hello-world
Hello! Have a great day!
```
Or you can call it with an argument:
```
> hello-world Jason
Hello Jason!  Have a great day!
```

You can use this repository as a starting point to create your own executable packages.  I'll also write about how this all works below.

*Note to Windows users:  So far I have only tested this on my Mac. I'm open to feedback to what your experience is like using this on a Windows machine.*

## Installation
To install and run this package globally on your machine, you must have **node** and **npm** installed on your machine. 

*Side note: I have not yet put this package in the main NPM registry, so at the moment these instructions assume you just clone or download this repo directly.*

Download or clone this repository to your machine.  Then, on the command-line, navigate into the root folder of this package.  Then you can install it globally like this:

```
> npm install . -g
```
The `.` in this command just means the current location.

## How to create your own package from scratch

#### Overview
The main structure of the package is as follows:
1. A `package.json` which has a `bin` property which specifies that this package will be an executable program
2. A `bin/hello-world.bin.js` file which provides the main implementation of the program
3. A `lib/index.js` file which provides the interface to users of the program. It gets called when the user runs the program. It parses the command-line arguments and calls a function from the main implementation file (`bin/hello-world.bin.js`) to do the main work.

#### Create a `package.json`
First create a `package.json` file for npm. This is how we can tell npm that our package will be an executable.  It will also automatically install them to a user’s PATH (which enables them to call the program from anywhere on their file system).

You can create your `package.json` file either manually or by running `npm init` and answering the questions that it asks.

The you'll need to add a `bin` entry at the end of it like this:
```
{
  ...,
  "bin": {
    "hello-world": "./bin/hello-world.bin.js"
  }
}
```
The `hello-world` will be the name of the executable program that will be installed on users' machines.  The `./bin/hello-world.bin.js` refers to the main implementation file for the program.  We'll create that next.





####


### Further reference
I read through [this](http://markmarkoh.com/nodejs-npm-and-executables/) and [this](https://ourcodeworld.com/articles/read/393/how-to-create-a-global-module-for-node-js-properly) and extracted things from both to figure out how to do this. 
