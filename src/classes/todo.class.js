export class Todo {

    static fromJson ({id,tarea,completa,creado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id       = id;
        tempTodo.tarea    = tarea;
        tempTodo.completa = completa;
        tempTodo.creado   = creado;

        return tempTodo;
    }

    constructor( tarea ){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completa = false;
        this.creado = Date();
    }
}