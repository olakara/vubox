<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
     <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/dropdowns">Sample Dropdown</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

