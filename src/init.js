const userInput = document.getElementById('user-input');
const button = document.getElementById('add-button');
const toDoListContainer = document.getElementById('todo-list');

const displayTodo = ()=>{
     const listItem = document.createElement('h1')
     listItem.innerText = userInput.value
     toDoListContainer.append(listItem)
}

button.addEventListener('click',(e) =>{
    e.preventDefault();
    displayTodo();
})
