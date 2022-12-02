
<template>
  <div class="content">
  <header>
     <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
  <RouterView />
  </div>
</template>

<style>
.content {
  text-align: center;
}
</style>


