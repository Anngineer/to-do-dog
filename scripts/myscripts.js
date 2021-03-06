// ---------------------------------------------------
// ---------------------------------------------------

// ---------------------------------------------------
// ---------------------------------------------------

// JAVASCRIPT FOR THE DOG

// Set the sprite Width in integers
var spriteWidthInt = 300;

const dogImage = document.getElementById("sprite");
/* It looks like we have to state what the background positiion is at the beginning i
if we want to use animations*/

// Set up the initial position
var currentPositionX = dogImage.style.backgroundPositionX;
// var currentPositionY = dogImage.style.backgroundPositionY;
currentPositionX = "0px";
// currentPositionY = "0px";

// MOVING FIRST TASK
/* -----------------Playing around in the console------------*/

// This is just a blueprint for the first task item that's automatically added in the HTML.
var taskList = document.getElementsByClassName("list-item");
const taskItem = document.querySelector("li");

//On load, at the top of the page, we might declare the checkbox name so we'll use var in case that's needed again.
var checkbox = document.querySelector("input");
checkbox.addEventListener("click", () => {
  taskItem.classList.toggle("completed");
  dogRuns();
  animateThroughSprite();
  settleDownDog();
});
// Have a click event set for the delete buttons that
// will hide the parent list item
const deleteButton = document.querySelector("button");
deleteButton.addEventListener("click", () => {
  deleteButton.parentElement.style.display = "none";
  dogSits();
  animateThroughSprite();
  settleDownDog();
});

//ANIMATION FUNCTION
function animateDog() {
  // Get the width of the element to determine what the step will be
  var dogWidthCutX = dogImage.clientWidth;
  // console.log(`The width is ${dogWidthCutX}`);
  var dogWidthInt = parseInt(dogWidthCutX);
  // console.log(dogWidthInt);
  var currentPositionCutX = currentPositionX.slice(0, -2);
  // console.log(currentPositionCutX);
  var currentPositionIntX = parseInt(currentPositionCutX);
  // console.log();
  var newPositionIntX = currentPositionIntX - dogWidthInt;
  // console.log(`New Position is ${newPositionIntX}`);
  var newPositionStrX = `${newPositionIntX}px`;
  // console.log(newPositionStrX);
  dogImage.style.backgroundPositionX = newPositionStrX;
  return (currentPositionX = newPositionStrX);
}

// Function to set to 0px
function animateReset() {
  dogImage.style.backgroundPositionX = "0px";
  console.log("0px");
}

// Animation Function for moving through the full sprite range
function animateThroughSprite() {
  console.log("bark!");
  animateDog(); //first animation image change
  setTimeout(() => animateDog(), timeInterval); //second animation image change
  setTimeout(() => animateDog(), 2 * timeInterval); // third
  setTimeout(() => animateDog(), 3 * timeInterval); // fourth
  setTimeout(() => animateDog(), 4 * timeInterval); // 1st again
  setTimeout(() => animateDog(), 5 * timeInterval); // second
  setTimeout(() => animateDog(), 6 * timeInterval); // third
  setTimeout(() => animateDog(), 7 * timeInterval); // fourth
  setTimeout(() => animateReset(), 8 * timeInterval); // 1st again -- reset to 0px
  setTimeout(() => console.log("barkbarkbark"), 8 * timeInterval);
}

//Function for making the dog chill after the end of the animation
function settleDownDog() {
  setTimeout(() => {
    dogSits();
    console.log("dog sits");
  }, 8 * timeInterval);
}

function settleDownTime(time) {
  setTimeout(() => {
    dogSits();
    console.log("dog sits");
  }, time);
}
// EVENT LISTENER FOR CLICKING

// Establish the interval time
var timeInterval = 150;

dogImage.addEventListener("click", () => {
  animateThroughSprite();
  // Yay, let's look at promises and await functions <3
  // animateThroughSprite();
});

dogImage.addEventListener("dblclick", () => {
  dogPlays();
  animateThroughSprite();
  settleDownDog();
});

// Functions for pulling up other sprites
function dogSits() {
  dogImage.classList = ["sit"];
  currentPositionX = "0px";
}
function dogRuns() {
  dogImage.classList = ["run"];
  currentPositionX = "0px";
}

function dogSleeps() {
  dogImage.classList = ["sleep"];
  currentPositionX = "0px";
}
function dogPlays() {
  dogImage.classList = ["play"];
  currentPositionX = "0px";
}
function dogSniffs() {
  dogImage.classList = ["sniff"];
  currentPositionX = "0px";
}

/*--------------------JavaScript For the TO DO -----------------*/
/*-------------------------------------*/
/*-------------------------------------*/
/*-------------------------------------*/
/*-------------------------------------*/

/*--------------------JavaScript Plan of Attack -----------------*/

// Clean Up Javascript for the part at the bottom that is a summary of how to do it.
// Move the current Plan of attack with numbers down to the bottom with that. Call it Summary?
// Delete all of the console.logs and console.dirs
// Label anything that you haven't yet.
// Delete extra space.
//

// -----Stating the Global Constants

// Locate the newTaskInput from the textbox.
const newTaskInput = document.getElementById("newTaskInput");

// Locate the button for adding a new task item.
const addButton = document.getElementById("addButton");

//Name the example li so it can be deleted on the first run
const exampleLI = document.getElementById("example-li");

//Check to see if there is local storage. If not,
//Create an array to store active tasks to use in the future.
let savedTaskList = [];
let localTaskList = [];
window.addEventListener("load", function () {
  //Once the window has loaded,

  if (this.localStorage.getItem("localList")) {
    //Check to see if there is a locally saved list
    exampleLI.remove(); //If there is one, remove the exampleLI
    let oldItems = this.localStorage.getItem("localList"); // Save the local storage list
    let oldItemsArray = oldItems.split("___"); //Split up the string into an array
    savedTaskList = oldItemsArray; // save this as the savedTaskList and localTaskList to be able to edit it later
    localTaskList = oldItemsArray;
    savedTaskList.map((listPhrase) => createLocalListItem(listPhrase)); // Map these onto the list
    // If there is anything saved, make those into items. Otherwise, just show the automatic first item.
  } else {
    // If there isn't anything saved locally, we'll just show the exampleLI.
  }
});

// There were some issues where the checkbox loaded checked, so if that happens again, use
var checkbox = document.querySelector("input");
checkbox.checked = "";

/*-------Event Listeners on the textbox and add-task buttons----*/

// Event listener for clicking the task add button
addButton.addEventListener("click", () => {
  //Create a new List Item with this information using the function above.
  createNewListItem();
  // Reset the input box.
  newTaskInput.value = "";
  // ADD ANIMATION OF EXCITEMENT
});

// Event listener for hitting enter inside the textbox
newTaskInput.addEventListener("keyup", ({ key }) => {
  // ADD AN ANIMATION OF THE DOG SNIFFING REGARDLESS OF THE KEYUP
  dogSniffs();
  // MAKE A FUNCTION so that if the value box is set to zero or the person
  //moves focus out of the input box, then you do setteDownTime
  // if (newTaskInput="") {
  //   settleDownTime(6000);
  // }
  newTaskInput.addEventListener(
    "focusout",
    () => {
      settleDownTime(400);
    },
    { once: true }
  );

  if (key === "Enter") {
    //Create a new List Item with this information using the function above.

    createNewListItem();
    // Reset the input box.
    newTaskInput.value = "";
    //ANIMATION OF EXCITEMENT
  }
  // ADD ANIMATION OF EXCITEMENT
});

//--------------------------------------
// ------------------FUNCTION to create List Item with locally saved items
function createLocalListItem(listPhrase) {
  //if the example element still exists, delete it.
  // if (exampleLI) {
  //   exampleLI.remove();
  // }

  // Get the string for task from the text box
  const newInnerText = listPhrase;

  // Get the number for the new item's ID with the task list Ul's length
  const lengthUL = document.getElementById("task-list-UL").childElementCount;
  const newLength = lengthUL + 1;

  // Create the new li element with an ID, classList, innerText, and then adding the innerText onto the savedTaskList array.
  const newID = "list-item" + newLength;
  const newTaskItemElement = document.createElement("li");
  newTaskItemElement.classList = "list-item";
  newTaskItemElement.id = newID;

  //make a left side div with the inner text of the value
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left-side-of-li");
  leftDiv.innerText = newInnerText;

  // Create new checkmark element and add it to the li element
  const newCheckBox = document.createElement("input");
  const checkBoxClasses = "checkbox checkbox" + newLength;
  newCheckBox.classList = checkBoxClasses;
  newCheckBox.type = "checkbox";
  // Event listener for that checkbox to toggle the class "completed" when clicked
  newCheckBox.addEventListener("click", () => {
    newTaskItemElement.classList.toggle("completed");
    // ADD ANIMATION OF REWARD
    dogRuns();
    animateThroughSprite();
    settleDownDog();
  });

  //prepend leftDiv onto the new LI, then prepend the checkbox on there.
  newTaskItemElement.prepend(leftDiv);
  leftDiv.prepend(newCheckBox);

  //Create delete button and adding it to the end inside the li element
  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList = "deleteButton";
  newDeleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  newTaskItemElement.appendChild(newDeleteButton);
  //Event listener to display:none when clicked and take the element's innerText off of the saved tasks array.
  newDeleteButton.addEventListener("click", () => {
    const parentLI = newDeleteButton.parentElement;
    var stringToDelete = parentLI.innerText.slice(0, -1);
    const index = savedTaskList.indexOf(stringToDelete);
    savedTaskList.splice(index, 1);
    let localList = savedTaskList.join("___");
    this.localStorage.setItem("localList", localList);
    parentLI.style.display = "none";
    //ADD ANIMATION OF REWARD
    dogSits();
    animateThroughSprite();
    settleDownDog();
  });

  //Insert the li element into the document
  const parentUL = document.getElementById("task-list-UL");
  parentUL.appendChild(newTaskItemElement);
  // dogSniffs();
  // animateThroughSprite();
  // settleDownDog();
  /* SUMMARY OF THIS FUNCTION 
    it's externally called when you click on addButton or when you hit ENTER inside the textbox 
    1) take the value of the input text box and save that
    2) create a new id for the new li, which will be li + lengthOfItemList
    3) make a const for the text of 
        <li id="list-itemLENGTHOFLISTPLUSONE" class="list-item "><input type="checkbox" class="checkbox checkbox1" name="NEWCONST" id="">NEWCONST<button>x</button></li>
    4) We don't need to append that on to the local list
    5) add an event listener to see if that one is completed
    and another event listener to delete/display:none;
    */
}
//--------------------------------------

/*--------------------FUNCTION for creating new list items -----------------*/

function createNewListItem() {
  //if the example element still exists, delete it.
  // if (exampleLI) {
  //   exampleLI.remove();
  // }

  // Get the string for task from the text box
  const newInnerText = newTaskInput.value;

  // Get the number for the new item's ID with the task list Ul's length
  const lengthUL = document.getElementById("task-list-UL").childElementCount;
  const newLength = lengthUL + 1;

  // Create the new li element with an ID, classList, innerText, and then adding the innerText onto the savedTaskList array.
  const newID = "list-item" + newLength;
  const newTaskItemElement = document.createElement("li");
  newTaskItemElement.classList = "list-item";
  newTaskItemElement.id = newID;
  // newTaskItemElement.innerText = newInnerText;
  savedTaskList.push(newInnerText);
  let localList = savedTaskList.join("___");
  this.localStorage.setItem("localList", localList);

  //make a left side div with the inner text of the value
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left-side-of-li");
  leftDiv.innerText = newInnerText;

  // Create new checkmark element and add it to the li element
  const newCheckBox = document.createElement("input");
  const checkBoxClasses = "checkbox checkbox" + newLength;
  newCheckBox.classList = checkBoxClasses;
  newCheckBox.type = "checkbox";
  // Event listener for that checkbox to toggle the class "completed" when clicked
  newCheckBox.addEventListener("click", () => {
    newTaskItemElement.classList.toggle("completed");
    // ADD ANIMATION OF REWARD
    dogRuns();
    animateThroughSprite();
    settleDownDog();
  });

  //prepend leftDiv onto the new LI, then prepend the checkbox on there.
  newTaskItemElement.prepend(leftDiv);
  leftDiv.prepend(newCheckBox);

  //Create delete button and adding it to the end inside the li element
  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList = "deleteButton";
  newDeleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  newTaskItemElement.appendChild(newDeleteButton);
  //Event listener to display:none when clicked and take the element's innerText off of the saved tasks array.
  newDeleteButton.addEventListener("click", () => {
    const parentLI = newDeleteButton.parentElement;
    var stringToDelete = parentLI.innerText.slice(0, -1);
    const index = savedTaskList.indexOf(stringToDelete);
    savedTaskList.splice(index, 1);
    let localList = savedTaskList.join("___");
    this.localStorage.setItem("localList", localList);
    parentLI.style.display = "none";
    //ADD ANIMATION OF REWARD
    dogSits();
    animateThroughSprite();
    settleDownDog();
  });

  //Insert the li element into the document
  const parentUL = document.getElementById("task-list-UL");
  parentUL.appendChild(newTaskItemElement);
  dogSniffs();
  animateThroughSprite();
  settleDownDog();
  /* SUMMARY OF THIS FUNCTION 
    it's externally called when you click on addButton or when you hit ENTER inside the textbox 
    1) take the value of the input text box and save that
    2) create a new id for the new li, which will be li + lengthOfItemList
    3) make a const for the text of 
        <li id="list-itemLENGTHOFLISTPLUSONE" class="list-item "><input type="checkbox" class="checkbox checkbox1" name="NEWCONST" id="">NEWCONST<button>x</button></li>
    4) append that on to the last list
    5) add an event listener to see if that one is completed
    and another event listener to delete/display:none;
    */
}

/*-------------------Additional JS Value Action--------------------*/

// 1. SAVING LIST ITEMS
//It would be nice to have the option to save all of the unchecked
//items and email them to yourself or have a link for
// that page the next day so that you don't lose it.
// I made the savedTaskList array for this.  I can add that functionality
// to message that info to a new website that is able to add those in one-by-one
// the next time you want to use the to-do app.

// 2. ANIMATIONS
// Look for " ADD ANIMATION"
// Add in event listeners to make the dog move when you add an item, delete an item,
// and give it presents and make it move when you check an item off.

//3. Initital example LI
//  Change the example li to different positive statements
// They can be from the dog. Make an array of these and then
// randomly insert them with a function that automatically goes off
// at the beginning of the load.
/* ----------ANIMATION FUNCTIONS----------------------------*/
