export default {
    getTodo({commit}, todo){
        commit('GET_TODO', todo.target.value)
    },
    addTodo({commit}){
        commit('ADD_TODO')
    },
    clearTodo({commit}){
        commit('CLEAR_TODO')
    }
}