<script setup>
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';
import {uaeStates, uaeCities} from '@/services/statesAndCities.js'

const selectedState = ref();
const selectedCity = ref();

const states = ref(uaeStates);
const cities = ref(uaeCities);

const filteredCities  = ref([])

const onStateChange = (event) => {
  const  { value } = event;
  selectedCity.value = null;
  filteredCities.value = cities.value.filter( x=> x.cascade === value);
}

</script>
<template>
    <main>
    <h1>Sample Dropdowns</h1>
    <Dropdown v-model="selectedState" :options="states" optionLabel="name" optionValue="value" placeholder="Select a State" @change="onStateChange" />
    <Dropdown v-model="selectedCity" :options="filteredCities" optionLabel="name" optionValue="value" placeholder="Select a City" />
    <hr/>
    Selected State: {{selectedState}} <br/>
    Selected City: {{selectedCity}}
  </main>
</template>

