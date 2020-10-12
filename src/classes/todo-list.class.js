import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            
            if( todo.id == id){
                todo.completa = !todo.completa;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completa);
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
        localStorage.setItem('pepe',JSON.stringify(this.todos) );
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('pepe')) 
            ?  JSON.parse(localStorage.getItem('pepe')) 
        : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }
}