export default {
    getTodo({commit}, todo){
        commit('GET_TODO', todo.target.value)
    },
    addTodo({commit}){
        commit('ADD_TODO')
        commit('CLEAR_TODO')
    },
    editTodo({commit}, todo){
        commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
        commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
        commit('COMPLETE_TODO', todo)
    }
}