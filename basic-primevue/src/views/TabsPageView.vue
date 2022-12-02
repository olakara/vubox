<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
</script>
<template>
    <TabView>
        <TabPanel header="Summary">
            Summary component goes here
        </TabPanel>
        <TabPanel header="Processes">
            Process component goes here
        </TabPanel>
        <TabPanel header="Matrix">
            Matrix component goes here
        </TabPanel>
        <TabPanel header="Employees">
            Employees component goes here
        </TabPanel>
    </TabView>
</template>