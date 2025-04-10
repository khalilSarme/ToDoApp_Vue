import {
  ref,
  computed
} from 'vue';

import {
  defineStore
} from 'pinia';

export const useTodoStore = defineStore("todo", () => {
  // state
  const text = ref("");
  const isCompleted = ref(false);
  const ProDate = ref("");
  const ExpDate = ref("");
  
  // getters
  const getTodoText = computed(() => text.value);
  const getCompleted = computed(() => (isCompleted.value)? 'Completed' : 'Not Completed');
  
  // actions
  const reset = () => {
    text.value = "";
    ProDate.value = "";
    ExpDate.value = "";
  }

  return {
    text,
    isCompleted,
    ProDate,
    ExpDate,
    getTodoText,
    getCompleted,
    reset
  }
});

