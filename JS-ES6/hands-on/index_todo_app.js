// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}
Todo.nextId = 0;
// Service
class TodosService {
    constructor(todo) {

        console.log(todo);
    }
    addTodo(title) {
        this.todo.title=title;
    }
    editTodo(id, newTitle) {

    }
    completeTodo(id) {

    }
    completeAll() {

    }
    deleteTodo(id) {

    }
    clearCompleted() {

    }
    viewTodos(filter) {

    }
}

let todo=new Todo('Rajeev','28/11/2018');
const service = new TodosService(todo);