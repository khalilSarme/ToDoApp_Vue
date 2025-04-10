<script setup>
  import {
    RouterLink
  } from 'vue-router';

  import {
    useRouter,
  } from 'vue-router';

  const router = useRouter();
  const MyRoutes = router.options.routes;
</script>

<template>
  <nav v-bind="$attrs">
    <my-container class="container">
      <div class="links">
        <router-link v-for="(route, index) in MyRoutes" :key="route.name" :to="{name: route.name}">
          {{ route.name }}
        </router-link>
      </div>
    </my-container>
  </nav>
</template>

