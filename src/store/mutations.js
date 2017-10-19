export default {
    ADD_TODO(state){
        state.todos.push({
            body:state.newTodo,
            completed:false
        })
        state.newTodo = ''
    },
    GET_TODO(state, todo){
        state.newTodo = todo
    },
    CLEAR_TODO(state){
        state.newTodo=''
    }
}