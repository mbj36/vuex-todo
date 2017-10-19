export default {
    getTodo({commit}, todo){
        commit('GET_TODO', todo)
    },
    addTodo({commit}){
        commit('ADD_TODO')
    },
    clearTodo({commit}){
        commit('CLEAR_TODO')
    }
}