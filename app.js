const formEL = document.getElementById('form')
const inputEL = document.getElementById('input')
const todoEL = document.getElementById('todos')

formEL.addEventListener('submit', (e) => {

    e.preventDefault();

    const todoText = inputEL.value;

    if(todoText) {
        const newToDo = document.createElement('li');
        newToDo.innerText = todoText;
        todoEL.appendChild(newToDo);

        inputEL.value = '';
    }


})