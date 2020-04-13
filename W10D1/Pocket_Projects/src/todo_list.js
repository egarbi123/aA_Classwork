const toDos = [];

const ul = document.querySelector('ul.todos')
const form = document.querySelector('form.add-todo-form')

function addTodo(e) {
    //let addTD = document.querySelector('form > input')
    let addTD = form.firstChild().value;

}

class ToDo {
    constructor(text) {
        this.text = text;
        this.done = false;
    }
}