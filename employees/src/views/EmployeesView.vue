<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useEmployeesStore } from '@/stores/employees';

const employeesStore = useEmployeesStore();
const selectedEmployees = ref();
const router = useRoute();

onMounted(async () => {
  await employeesStore.getAllEmployees();
})

const handleAddEmployeeClick = () => {
  //router.
}
</script>
<template>
  <main>
    <div class="grid">
      <div class="col"><h1>Employees</h1></div>
      <div class="col"></div>
      <div class="col text-center"> <Button label="Add" @click="handleAddEmployeeClick($event)" icon="pi pi-plus" iconPos="left" /></div>
    </div>    

    <DataTable :value="employeesStore.employees" v-model:selection="selectedEmployees" dataKey="id"  :paginator="true" :rows="12" stripedRows responsiveLayout="scroll" class="p-datatable-sm">
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column field="firstName" header="Name" :sortable="true" headerStyle="width: 15%">
        <template #body="slotProps">
          <div>
            <img :src="slotProps.data.avatar" class="avatar-image" />
            <div class="name-block">{{slotProps.data.firstName}} {{slotProps.data.lastName}}</div>
          </div>
            
        </template>
      </Column>
      <!-- <Column field="firstName" header="First Name" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="lastName" header="Last Name" :sortable="true" headerStyle="width: 10%"></Column> -->
      <Column field="gender" header="Gender" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="job" header="Job" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="email" header="Email" headerStyle="width: 10%"></Column>
      <Column field="mobile" header="Mobile" headerStyle="width: 10%"></Column>
      <Column field="ip" header="IP"  headerStyle="width: 10%"></Column>
      <Column header="Color" headerStyle="width: 10%">
          <template #body="slotProps">
              <div :style="{background: slotProps.data.color}" class="color-block"></div>
          </template>
      </Column>
      <Column header="Actions">
          <template #body="slotProps">
              Edit | Delete
          </template>
      </Column>
    </DataTable>
  </main>
</template>

<style>
.avatar-image {
  border:  1px solid gray;
  border-radius: 50%;
  height: 32px;
  width: 32px
}

.color-block {
  border-radius: 10px;
  height: 24px;
  width:24px
}

.name-block {
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
  margin-top: 5px;
}
</style>

