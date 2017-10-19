export default {
    ADD_TODO(state){
        state.todos.push({
            body:state.newTodo,
            completed:false
        })
    },
    GET_TODO(state, todo){
        state.newTodo = todo
    },
    CLEAR_TODO(state){
        state.newTodo=''
    },
    REMOVE_TODO(state, todo){
        let todos = state.todos
        todos.splice(todos.indexOf(todo), 1)
    },
    EDIT_TODO(state){

    },
    COMPLETE_TODO(state, todo){
        todo.completed = !todo.completed
    }
}