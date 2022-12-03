<script setup>
import { onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useEmployeesStore } from '@/stores/employees';

const employeesStore = useEmployeesStore();

onMounted(async () => {
  await employeesStore.getAllEmployees();
})
</script>
<template>
  <main>
    <h1>Employees</h1>
    <DataTable :value="employeesStore.employees" :paginator="true" :rows="10" stripedRows responsiveLayout="scroll" class="p-datatable-sm">
      <Column header="Image" headerStyle="width: 2%">
        <template #body="slotProps">
            <img :src="slotProps.data.avatar" class="avatar-image" />
        </template>
      </Column>
      <Column field="firstName" header="First Name" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="lastName" header="Last Name" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="gender" header="Gender" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="job" header="Job" :sortable="true" headerStyle="width: 10%"></Column>
      <Column field="email" header="Email" headerStyle="width: 10%"></Column>
      <Column field="mobile" header="Mobile" headerStyle="width: 10%"></Column>
      <Column field="ip" header="IP"  headerStyle="width: 10%"></Column>
      <Column header="Color">
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
  border-radius: 50%;
  height: 48px;
  width:48px
}

.color-block {
  border-radius: 10px;
  height: 24px;
  width:24px
}
</style>

