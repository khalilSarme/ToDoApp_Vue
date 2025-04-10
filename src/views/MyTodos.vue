<script setup>
  import {
    storeToRefs
  } from 'pinia';
  import {
    useMyTodosStore
  } from "../stores/myTodos.js";

  const myTodosStore = useMyTodosStore();

  const {
    todos,
  } = storeToRefs(myTodosStore);
  const deleteTask = myTodosStore.deleteTask;
  const toggleCompleted = myTodosStore.toggleCompleted;

</script>

<template>
  <my-container class="container py-5">
    <h1 class="container">My Tasks</h1>
    <my-container class="my-5 todos">
      <div :class="t.is_Completed ? 'card shadow-lg text-decoration-line-through' : 'card shadow-lg'" v-for="(t,i) in todos" :key="i">
        <div class="card-body p-3">
          <h6 class="display-6 fw-normal">Doing : {{ t.text }}</h6>
        </div>
        <div class="card-footer px-3 py-1">
          <h6>Production Date : <span class="fw-light">{{ t.Production_Date }}</span></h6>
          <h6>Expiration Date : <span class="fw-light">{{ t.Expiration_Date }}</span></h6>
        </div>
        <div class="card-footer p-3">
          <button class="btn btn-danger" @click="deleteTask(i)">Delete</button>
          <button class="btn btn-dark ms-3" @click="toggleCompleted(i)">Mark as {{ t.is_Completed ? 'un complete' : 'complete'}} </button>
        </div>
      </div>
    </my-container>
  </my-container>
</template>


