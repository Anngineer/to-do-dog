/*--------------------JavaScript Plan of Attack -----------------*/

// Clean Up Javascript for the part at the bottom that is a summary of how to do it. 
// Move the current Plan of attack with numbers down to the bottom with that. Call it Summary? 
// Delete all of the console.logs and console.dirs
// Label anything that you haven't yet. 
// Delete extra space. 
// 





/* When click on addButton 
1) take the value of the input text box and save that
2) create a new id for the new li, which will be li + lengthOfItemList
3) make a const for the text of 
    <li id="list-itemLENGTHOFLISTPLUSONE" class="list-item "><input type="checkbox" class="checkbox checkbox1" name="NEWCONST" id="">NEWCONST<button>x</button></li>
4) append that on to the last list
5) add an event listener to see if that one is completed
and another event listener to delete/display:none;
*/
const newTaskInput = document.getElementById('newTaskInput');
console.dir(newTaskInput);
const addButton = document.getElementById('addButton');
console.dir(addButton);
// const lengthUl = document.querySelector('ul').length;
// console.log(lengthUl);

const savedTaskList = [];
console.log(savedTaskList);

// The function that creates a new list item.  You might want to clean this up
// or turn it into its own object.
function createNewListItem() {

    const newInnerText = newTaskInput.value;
    console.log(newTaskInput.value);
    
    // Get the number for the new item
    const lengthUl = document.querySelector('ul').childElementCount;
    console.log(lengthUl);
    const newLength = lengthUl +1;
    console.log(newLength);

    // making the new li element
    const newID = "list-item"+newLength;
    console.log(newID);
    const newTaskItemElement = document.createElement('li');
    newTaskItemElement.classList = "list-item";
    newTaskItemElement.id = newID;
    newTaskItemElement.innerText= newInnerText;
    console.log(newTaskItemElement); 
    savedTaskList.push(newInnerText);
    console.log(savedTaskList);


    // making the new checkmark element
    const newCheckBox = document.createElement('input');
    const checkBoxClasses = "checkbox checkbox"+newLength;
    newCheckBox.classList=checkBoxClasses;
    newCheckBox.type= "checkbox";
    console.log(newCheckBox);
    // Make a new event listener fot that checkbox using the id, maybe? 
    // We might need to make this a class thing where when you hit the button it creates a whole new object with 
    //built in functions
    newCheckBox.addEventListener('click', ()=> {
    newTaskItemElement.classList.toggle('completed');
    })






    newTaskItemElement.prepend(newCheckBox);
    const parentUL = document.querySelector('ul');
    parentUL.appendChild(newTaskItemElement);




    //making the new delete button
    const newDeleteButton = document.createElement('button');
    newDeleteButton.classList = "deleteButton";
    newDeleteButton.innerText="x"
    newTaskItemElement.appendChild(newDeleteButton);
    newDeleteButton.addEventListener('click', () => {
        const parentLI = newDeleteButton.parentElement;
        console.log(parentLI);
        var stringToDelete =parentLI.innerText.slice(0,-1); 
        console.log(stringToDelete);
        const index = savedTaskList.indexOf(stringToDelete);
        console.log(index);
        // console.log(savedTaskList.);
        savedTaskList.splice(index,1);
        console.log(savedTaskList);
        parentLI.style.display = "none";

    })





}

addButton.addEventListener('click', () =>{
    //Create a new List Item with this information using the function above.
    createNewListItem();
    // Reset the input box. 
    newTaskInput.value="";
});
// newTaskInput.addEventListener('')
newTaskInput.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
    //Create a new List Item with this information using the function above.
        
        createNewListItem();
        // Reset the input box. 
        newTaskInput.value="";
    }
})

/* When clicking any of the checkboxes
 use toggle to change class to "completed" 
 or not completed when clicked */




 

/*-------------------Additional Value Action--------------------*/

// 1. SAVING LIST ITEMS
//It would be nice to have the option to save all of the unchecked
//items and email them to yourself or have a link for
// that page the next day so that you don't lose it. 
// I made the savedTaskList array for this.  I can add that functionality
// to message that info to a new website that is able to add those in one-by-one 
// the next time you want to use the to-do app.  


// 2. ANIMATIONS
// Add in event listeners to make the dog move when you add an item, delete an item,
// and give it presents and make it move when you check an item off. 



/* -----------------Playing around in the console------------*/



var taskList = document.getElementsByClassName("list-item");
console.dir(taskList);

const taskItem = document.querySelector('li');
console.dir(taskItem);

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
