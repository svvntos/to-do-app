const formEL = document.getElementById('form')
const inputEL = document.getElementById('input')
const todoEL = document.getElementById('todos')

formEL.addEventListener('submit', (e) => {

    e.preventDefault();

    const todoText = inputEL.value;

    if (todoText) {
        const newToDo = document.createElement('li');
        newToDo.innerText = todoText;

        const clearBtn = document.createElement('a');
        clearBtn.className = 'delete-item';
        clearBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newToDo.appendChild(clearBtn);



        newToDo.addEventListener('click', () => {
            newToDo.classList.toggle('completed');
        })

        newToDo.addEventListener("contextmenu" || "touchend", (e) =>{
            e.preventDefault();
            newToDo.remove();
        })
 


todoEL.appendChild(newToDo);

inputEL.value = '';
    }


})