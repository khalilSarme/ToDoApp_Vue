import {
  defineStore
} from 'pinia';

export const todo = defineStore("todo", {
  state: () => ({
    text: "",
    isCompleted: false,
    ProDate: "",
    ExpDate: ""
  }),
  getters: {
    getTodoText() {
      return this.text;
    },
    getCompleted() {
      return this.isCompleted ? 'Completed': 'Not Completed'
    }
  },
  actions: {}
});