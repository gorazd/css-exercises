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
// innerHTML manipulates the content between the HTML tags
titleElement.innerHTML = myMessage;

/****************
* Manipulate CSS
****************/
// select the element with the ID 'styleButton'
var buttonStyleElement = document.getElementById('styleButton');

// add event listener .addEventListener(type, function)
buttonStyleElement.addEventListener('click', changeTextColor);

// a varible storing a Number
var counter = 0;

// function containing some code
function changeTextColor() {

  var titleColors = ["red", "purple", "pink", "orange", "green"];
  
  // print the whole Array
  console.log(titleColors);
  // print the Array length
  console.log(titleColors.length);
  // print the first item in the Array
  console.log(titleColors[0]);
  // print the last item in the Array
  console.log(titleColors[titleColors.length-1]);

  // assign a new value to the color property of the element
  titleElement.style.color = titleColors[counter];

  if(counter == titleColors.length - 1) {
    console.log("WOOHOO IT IS TRUE");
    counter = -1;
  }

  // increment by one
  counter ++;

  console.log('Color changed');
};

// execute a function
// changeTextColor();