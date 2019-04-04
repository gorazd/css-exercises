// single-line comment

/*
  multi-line
  comment
*/

// to log information to the console
// we can use the console.log();

console.log('hello world');

// single line instruction - statement
// has to end with a semicolon

// declare a variable
var messageToTheWorld = 'Hello world';
var myName = 'Gorazd';

var myMessage = messageToTheWorld + ' from ' + myName;

// try to substitute the content of the h1 element
var titleElement = document.getElementById('title');
titleElement.innerHTML = myMessage;
