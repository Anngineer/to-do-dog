/*--------------------JavaScript Plan of Attack -----------------*/

// Clean Up Javascript for the part at the bottom that is a summary of how to do it. 
// Move the current Plan of attack with numbers down to the bottom with that. Call it Summary? 
// Delete all of the console.logs and console.dirs
// Label anything that you haven't yet. 
// Delete extra space. 
// 


// -----Stating the Global Constants

// Locate the newTaskInput from the textbox.
const newTaskInput = document.getElementById('newTaskInput');

// Locate the button for adding a new task item. 
const addButton = document.getElementById('addButton');

//Create an array to store active tasks to use in the future.
const savedTaskList = [];


/*-------Event Listeners on the textbox and add-task buttons----*/

// Event listener for clicking the task add button
addButton.addEventListener('click', () =>{
    //Create a new List Item with this information using the function above.
    createNewListItem();
    // Reset the input box. 
    newTaskInput.value="";
    // ADD ANIMATION OF EXCITEMENT

});

// Event listener for hitting enter inside the textbox
newTaskInput.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
    //Create a new List Item with this information using the function above.
        
        createNewListItem();
        // Reset the input box. 
        newTaskInput.value="";
    }
    // ADD ANIMATION OF EXCITEMENT
})

/*--------------------FUNCTION for creating new list items -----------------*/


function createNewListItem() {

   // Get the string for task from the text box
    const newInnerText = newTaskInput.value;
     
    // Get the number for the new item's ID with the task list Ul's length
    const lengthUL = document.getElementById('task-list-UL').childElementCount;
    const newLength = lengthUL +1;
  
    // Create the new li element with an ID, classList, innerText, and then adding the innerText onto the savedTaskList array.
    const newID = "list-item"+newLength;
    const newTaskItemElement = document.createElement('li');
    newTaskItemElement.classList = "list-item";
    newTaskItemElement.id = newID;
    newTaskItemElement.innerText= newInnerText;
    savedTaskList.push(newInnerText);

    // Create new checkmark element and add it to the li element
    const newCheckBox = document.createElement('input');
    const checkBoxClasses = "checkbox checkbox"+newLength;
    newCheckBox.classList=checkBoxClasses;
    newCheckBox.type= "checkbox";
    // Event listener for that checkbox to toggle the class "completed" when clicked 
    newCheckBox.addEventListener('click', ()=> {
    newTaskItemElement.classList.toggle('completed');
    // ADD ANIMATION OF REWARD
    })
    newTaskItemElement.prepend(newCheckBox);

 
    //Create delete button and adding it to the end inside the li element
    const newDeleteButton = document.createElement('button');
    newDeleteButton.classList = "deleteButton";
    newDeleteButton.innerText="x"
    newTaskItemElement.appendChild(newDeleteButton);
    //Event listener to display:none when clicked and take the element's innerText off of the saved tasks array. 
    newDeleteButton.addEventListener('click', () => {
        const parentLI = newDeleteButton.parentElement;
        var stringToDelete =parentLI.innerText.slice(0,-1); 
        const index = savedTaskList.indexOf(stringToDelete);
        savedTaskList.splice(index,1);
        parentLI.style.display = "none";
        //ADD ANIMATION OF REWARD
    })

    //Insert the li element into the document 
    const parentUL = document.getElementById('task-list-UL');
    parentUL.appendChild(newTaskItemElement);




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


/*-------------------Additional Value Action--------------------*/

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



/* ----------ANIMATION FUNCTIONS----------------------------*/




/* -----------------Playing around in the console------------*/


// This is just a blueprint for the first task item that's automatically added in the HTML.
var taskList = document.getElementsByClassName("list-item");
const taskItem = document.querySelector('li');
// when clicked
const checkbox = document.querySelector('input');
checkbox.addEventListener('click', ()=> {
    taskItem.classList.toggle('completed');
})
// Have a click event set for the delete buttons that
// will hide the parent list item
const deleteButton= document.querySelector('button');
deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.style.display = "none";
 })
