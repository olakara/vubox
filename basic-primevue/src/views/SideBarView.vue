<script setup>
import {ref} from 'vue';
import Sidebar from 'primevue/sidebar/sfc';
import Button from 'primevue/button/sfc';

const visibleRight= ref(false);
</script>
<template>
    <main>
        <h1>Sidebar Page</h1>
        <Button icon="pi pi-arrow-left" @click="visibleRight = true" label="Open" />
    </main>
    <Sidebar v-model:visible="visibleRight" position="right" class="p-sidebar-md">
	    Content
    </Sidebar>
</template>
