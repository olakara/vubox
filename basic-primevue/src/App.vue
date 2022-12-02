<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
     <nav>
        <RouterLink to="/">Home</RouterLink> |
         <RouterLink to="/dropdowns">Sample Dropdown</RouterLink>  |
         <RouterLink to="/confirm">Confirm Dialog</RouterLink> |
         <RouterLink to="/sidebar">Sidebar Page</RouterLink>  |    
         <RouterLink to="/tabs">Tabs Page</RouterLink>  |    

      </nav>
  </header>

  <RouterView />
</template>

