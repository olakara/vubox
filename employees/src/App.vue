<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/employees">Employees</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

