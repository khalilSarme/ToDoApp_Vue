import {
  defineStore
} from 'pinia';

export const MyTodos = defineStore("todos", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('my_todos')) || [],
  }),
  getters: {
    getStoredTodos() {
      return this.todos;
    },
    getCompletedTasks() {
      const completedTodos = this.todos.filter((e) => e.isCompleted == true);
      return completedTodos;
    }
  },
  actions: {
    createNewTask(t) {
      if(typeof t === "object" && t.text.trim() && t.Production_Date.trim() && t.Expiration_Date.trim()) {
        this.todos.push(t);
        this.updateTodos();
      } else {
        alert("You must fill out all the input fields")
        return;
      }
    },
    updateTodos() {
      localStorage.setItem("my_todos",JSON.stringify(this.todos));
    },
    toggleCompleted(i) {
      this.todos[i].is_Completed = !this.todos[i].is_Completed;
      this.updateTodos();
    },
    deleteTask(i) {
      this.todos.splice(i, 1);
      this.updateTodos();
    },
    $reset() {
      this.todos = [];
      localStorage.removeItem('my_todos');
    }
  }
});