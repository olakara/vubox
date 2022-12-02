<script setup>
import { onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onMounted, onUnmounted } from 'vue';

onBeforeMount(() => {
    console.log('onBeforeMount');
})

onMounted(() => {
    console.log('onMounted');
})

onUnmounted(() => {
    console.log('onUnmounted')
})

onBeforeUnmount(() => {
    console.log('onBeforeUnMount');

})

onActivated(() => {
    console.log('onActivated')
})

onDeactivated(() => {
    console.log('onDeactivated')
})



</script>
<template>
    Counter!
</template>