<script setup>
import { ref } from 'vue';
import {vSelect} from '@/directives/vSelect.js';

const name = ref('Abdel Raoof');

const vAutofocus =  {
  mounted: (el) => {
    el.focus()
  }
}
</script>
<template>
  <main>
    <h1>Home</h1>
    Name:
    <input type="text" v-model="name" v-autofocus v-select/>
    <hr/>
    Name is {{name}}
  </main>
</template>
