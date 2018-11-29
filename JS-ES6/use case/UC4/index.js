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
        this.todolist=[todo];
    }
    addTodo(title) {
        let todo=new Todo(title,new Date());
        this.todolist.push(todo);
    }
    editTodo(id, newTitle) {
            this.todolist.forEach(function(item,index){
                if(item.id===id)
                {
                    item.title=newTitle
                }
            });
    }
    completeTodo(id) {
        this.todolist.forEach(function(item,index){
            if(item.id===id)
            {
                item.completed=true;
            }
        });
    }
    completeAll() {
        this.todolist.forEach(function(item,index){
            item.completed=true;
        });
    }
    deleteTodo(id) {
        for (let i = 0; i < this.todolist.length; i++) { 
            if(this.todolist[i].id==id)
            {
                this.todolist.splice(i,1);
            }
        }

        // this.todolist.forEach(function(item,index){
        //     if(item.id===id)
        //     {
        //         //item.completed=true;
        //         this.todolist.splice(index,1);
        //     }
        // });
    }
    clearCompleted() {
        this.todolist.forEach(function(item,index){
            item.completed=false;
        });
    }
    viewTodos(filter) {
        this.todolist.forEach(function(item,index){
            console.log(item);
        });
    }
}

let todo=new Todo('',new Date());
const service = new TodosService(todo);


service.addTodo('Rahul');
service.addTodo('Naren');
service.editTodo(2,'ssss');
service.completeTodo(1);
service.completeAll();
//service.deleteTodo(2);
service.clearCompleted();

service.viewTodos();



//console.log(service.todolist);