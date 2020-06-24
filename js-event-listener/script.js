// variables
const circle = document.getElementById('circle');

const redBtn = document.getElementById('redButton');
const blueBtn = document.getElementById('blueButton');
const greenBtn = document.getElementById('greenButton');

let oldColor = "";
let currentColor = "yellow";

// attach the event listener
redBtn.addEventListener('click', function(){changeColor('red')} );
blueBtn.addEventListener('click',  function(){changeColor('blue')} );
greenBtn.addEventListener('click', function(){changeColor('green')} );

// the function we attached to the button
function changeColor(circleColor) {
  // Get the elements background color
  document.getElementById('old').textContent = "The circle was " + circle.style.backgroundColor;
  // change the CSS style
  circle.style.backgroundColor = circleColor;
  // assign the new color to the variable
  currentColor = circleColor;
  document.getElementById('current').textContent = "The circle is " + circleColor;
};
