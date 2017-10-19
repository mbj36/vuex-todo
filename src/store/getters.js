export default {
   newTodo: (state) => state.newTodo,
   todos:(state) => state.todos.filter((todo) => {
       return !todo.completed
   }),
   completedTodos: (state) => state.todos.filter((todo) => {
       return todo.completed
   })
}


