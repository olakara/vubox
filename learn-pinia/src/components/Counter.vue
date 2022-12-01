<script setup>
import {useCounterStore} from '@/stores/counter.js';

const counterStore = useCounterStore()
</script>
<template>
     <div class="count">
      {{ counterStore.count }}
    </div>
</template>