console.log("-- init script");

var myTitle;
/* the variable is undefined because it has no value assigned to it */
console.log(myTitle);
myTitle = document.getElementById('name');
/* the variable returns as null because it has a wrong value assigned to it */
console.log(myTitle);
myTitle = document.getElementById('appTitle').innerText;
/* the value of the variable gets logged */
console.log(myTitle);


/* Say my Name APP */

var allTheNames = [];
var nameButton = document.getElementById('nameButton');
var nameInput = document.getElementById('myName');
var messageBox = document.getElementById('messageBox');

nameButton.addEventListener('click', sayMyName);

function sayMyName() {

  if ( nameInput.value.length > 0 ) {
    // if there are more than 0 characters in the input field
    allTheNames.push(nameInput.value);
    // empty the input
    nameInput.value = "";
    // put the cursor in the input field
    nameInput.focus();

    // pick the last name from the array
    var lastNameAdded = allTheNames[allTheNames.length - 1];
    // SUCCESS
    updateTheMessage(
      "You have successfuly added " + lastNameAdded + " to the list", true);
  } else {
    // ERROR
    updateTheMessage("No name entered", false);
  }
  
} 

function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

  if (messageSuccess == true) {
    messageBox.classList.add('message-success');
    messageBox.classList.remove('message-error');
  } else {
    messageBox.classList.add('message-error');
    messageBox.classList.remove('message-success');
  }
}

/*  
  - The undo button should remove last name added
  - Give you a message about it

  - "List all the names" button should print all the names in an unordered list
*/