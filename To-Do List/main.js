const taskBtn = document.querySelector(".task");
const taskDiv = document.querySelector(".tasks");
const container = document.querySelector(".container");

let id = 0;


taskBtn.addEventListener('click', () => {
    const input = document.querySelector(".input");
    console.log(input.value);

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
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
    newDiv.remove();
})

    newDiv.appendChild(checkbox);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(deleteBtn);
    taskDiv.appendChild(newDiv);
    input.value = "";
    id++;
});