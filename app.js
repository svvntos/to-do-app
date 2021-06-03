const formEL = document.getElementById('form')
const inputEL = document.getElementById('input')
const todoEL = document.getElementById('todos')

formEL.addEventListener('submit', (e) => {

    e.preventDefault();

    addTodo();


})

function addTodo() {
    const todoText = inputEL.value;

    if (todoText) {
        const newToDo = document.createElement('li');
        newToDo.innerText = todoText;



        newToDo.addEventListener('click', () => {
            newToDo.classList.toggle('completed');

            updateLS();
        })

        newToDo.addEventListener("contextmenu" || "touchend", (e) => {
            e.preventDefault();
            newToDo.remove();
            updateLS();
        })


        todoEL.appendChild(newToDo);

        inputEL.value = '';

        updateLS();
    }
}


function updateLS() {

        const newTodoEL = document.querySelectorAll('li');

        const todos = [];

        newTodoEL.forEach((newTodoEL) => {
            todos.push({
                text: newTodoEL.innerHTML,
                completed: newTodoEL.classList.contains("completed"),
            });
        });

        localStorage.setItem('todos', JSON.stringify(todos));
}