<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/employees">Employees</RouterLink> |
        <RouterLink to="/employees/create">Add Employee</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

