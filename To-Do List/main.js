const taskBtn = document.querySelector(".task");
const taskDiv = document.querySelector(".section3");
const container = document.querySelector(".container");
const header = document.getElementById("header");
const input = document.querySelector('input');
let id = 0;

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter"){
        runInput();
    }
    return;
})

taskBtn.addEventListener('click', () => {
    runInput();
});

//Perfect example of function hoisting. Arrow functions are not hoisted (const runInput = () => {} would not hav eworked).
//So here, I decided to use the old way of function to hoist to the top.
function runInput(){
    
    const input = document.querySelector(".input");
    const err = document.querySelector('.error');
    console.log(input.value);
    if(!input.value){

    if (!err){
    const newError = document.createElement('p');
    newError.textContent = "Please enter a task.";
    newError.classList.add('error');
    header.after(newError);
    }
} else {
    if(err) err.remove();
    const newDiv = document.createElement('div');
    newDiv.classList.add('newTask');
    newDiv.setAttribute('id',id);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.classList.add('checkbox');

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = input.value;

    const deleteBtn = document.createElement('button');
        const img = document.createElement('img');
        img.src = 'cancel.svg';
        img.alt = 'Delete';
        img.width = 20;
        img.height = 20;
    deleteBtn.appendChild(img);
    deleteBtn.classList.add('delete');

    //Event Listener
    deleteBtn.addEventListener('click', () => {
    newDiv.remove();
})
    checkbox.addEventListener('change', () => {
    paragraph.classList.toggle('completed');
    })

    newDiv.appendChild(checkbox);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(deleteBtn);
    taskDiv.appendChild(newDiv);
    input.value = "";
    id++;
}
};