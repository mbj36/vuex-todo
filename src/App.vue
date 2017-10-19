<template>
  <div id="app">
    <h2>Hey, Add some todos!</h2>
    <input type="text" class="text" :value="newTodo" @change="getTodo" placeholder="Add todo here">
    <button @click="addTodo">Add Todo</button>
    <h3 v-if="todos.length>0">Tasks - {{todos.length}}</h3>
    <div v-for="todo in todos" :key="todo.id">
      {{todo.body}}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'newTodo',
      'todos'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_TODO',
      'GET_TODO',
      'CLEAR_TODO'
    ]),
    ...mapActions([
      'getTodo',
      'addTodo',
      'clearTodo'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.text {
  width: 300px;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
}
</style>
