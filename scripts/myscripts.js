//Note to self for programming:
// I don't really like how they set this up, but look at the for loops for ideas.
// https://www.w3schools.com/howto/howto_js_todolist.asp 






/*--------------------JavaScript Plan of Attack -----------------*/

/* When click on addButton 
1) take the value of the input text box and save that
2) create a new id for the new li, which will be li + lengthOfItemList
3) make a const for the text of 
    <li id="list-itemLENGTHOFLISTPLUSONE" class="list-item "><input type="checkbox" class="checkbox checkbox1" name="NEWCONST" id="">NEWCONST<button>x</button></li>
4) append that on to the last list
5) add an event listener to see if that one is completed
and another event listener to delete/display:none;
*/

/* When clicking any of the checkboxes
 use toggle to change class to "completed" 
 or not completed when clicked */


// Have a click event set for the delete buttons that
// will hide the parent list item
const deleteButton= document.querySelector('button');
deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.style.display = "none";
 })


//Additional Value Action
//It would be nice to have the option to save all of the unchecked
//items and email them to yourself or have a link for
// that page the next day so that you don't lose it. 


/* -----------------Playing around in the console------------*/

var taskList = document.getElementsByClassName("list-item");
console.dir(taskList);



const taskItem = document.querySelector('li');
console.dir(taskItem);

//We need to make a for loop that makes an Event 
// listener for every list taskItem that exists.
// However, since these are all going to be added by hand,
// I don't think we need to do it that way. 
//Instead, we can create the event listener when the item is added.


// when clicked
const checkbox = document.querySelector('input');
checkbox.addEventListener('click', ()=> {
    taskItem.classList.toggle('completed');
})


