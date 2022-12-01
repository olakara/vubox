<script setup>
import CounterVue from '../components/Counter.vue';
import {useCounterStore} from '@/stores/counter.js';

const counterStore = useCounterStore()
</script>
<template>
 <div class="home">
    <CounterVue/>
    <div class="buttons">
      <button @click="counterStore.decrement">&nbsp; - &nbsp;</button>
      <button @click="counterStore.increment">&nbsp; + &nbsp;</button>
    </div>
    <hr/>
    <div>
      This counter is: {{counterStore.oddOrEven}}
    </div>
    <hr/>
    <div>
      <h3>Edit Counter</h3>
      <input type="number" v-model="counterStore.count" />
    </div>

 </div>
</template>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 20px;
}
</style>
