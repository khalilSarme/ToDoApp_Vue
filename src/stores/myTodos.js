import {
  ref,
  computed
} from 'vue';

import {
  defineStore
} from 'pinia';

import {
  useTodoStore
} from "./todo.js";

export const useMyTodosStore = defineStore("todos", () => {
  // state
  const todos = ref(JSON.parse(localStorage.getItem('my_todos')) || []);

  // getters
  const getStoredTodos = computed(() => todos.value);
  const getCompletedTasks = computed(() => todos.value.filter((e) => e.isCompleted === true));

  // actions
  const createNewTask = (t) => {
    if (typeof t === "object" && t.text.trim() && t.Production_Date.trim() && t.Expiration_Date.trim()) {
      todos.value.push(t);
      useTodoStore().reset();
      updateTodos();
    } else {
      alert("You must fill out all the input fields")
      return;
    }
  };
  const updateTodos = () => {
    localStorage.setItem("my_todos", JSON.stringify(todos.value));
  };
  const toggleCompleted = (i) => {
    todos.value[i].is_Completed = !todos.value[i].is_Completed;
    updateTodos();
  };
  const deleteTask = (i) => {
    todos.value.splice(i, 1);
    updateTodos();
  };
  function $reset() {
    todos.value = [];
    localStorage.removeItem('my_todos');
  }

  return {
    todos,
    getStoredTodos,
    getCompletedTasks,
    createNewTask,
    updateTodos,
    toggleCompleted,
    deleteTask,
    $reset
  }
});
