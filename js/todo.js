const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("DoDone");

const TODOS_KEY = "todos";



let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodo();

}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
