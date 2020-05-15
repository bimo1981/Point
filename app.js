//* SELECTORS
const todoInput = document.querySelector(".todo-input"),
    todoButton = document.querySelector(".todo-button"),
    todoList = document.querySelector(".todo-list");

    //* EVENT LISTENERS
todoButton.addEventListener("click", addToDo);

//* FUNCTIONS
function addToDo(event){
    event.preventDefault();
    //todo: create todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //todo: APPEND TO LIST
    todoList.appendChild(todoDiv);

    //todo: Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //todo: CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    //todo: CHECK TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

}