<script setup>
  import {
    useTodoStore
  } from "../stores/todo.js";
  import {
    useMyTodosStore
  } from "../stores/myTodos.js";

  import {
    storeToRefs
  } from 'pinia';

  const todoStore = useTodoStore();
  const myTodosStore = useMyTodosStore();

  const {
    text,
    ProDate,
    ExpDate,
    isCompleted
  } = storeToRefs(todoStore);

  const createNewTask = myTodosStore.createNewTask;

</script>

<template>
  <my-container class="pt-5">
    <h1 class="container"> Create a new task </h1>
    <my-container class="container my-5">
      <form class="rounded shadow d-flex flex-column align-items-start p-3 bg-dark" @submit.prevent="createNewTask({'text': text,'Production_Date': ProDate,'Expiration_Date': ExpDate,'is_Completed': isCompleted})">
        <label class="form-label text-white"> Todo Text : </label>
        <input v-model="text" class="form-control" placeholder="Enter a todo text" />
        <label class="form-label text-white mt-3"> Starts at : </label>
        <input type="date" class="form-control" v-model="ProDate" />
        <label class="form-label text-white mt-3"> Ends at : </label>
        <input type="date" class="form-control" v-model="ExpDate" />
        <input type="submit" name="" id="" value="Save" class="mt-4 btn btn-success px-3 py-2" />
      </form>
    </my-container>
  </my-container>
</template>