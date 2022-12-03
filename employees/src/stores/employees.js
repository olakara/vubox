import { ref } from 'vue';
import { defineStore } from 'pinia';
import EmployeesService from '@/services/employees';

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref([]);
  const service = new EmployeesService();

  const getAllEmployees = async () => {
    employees.value = await service.getAllEmployees();
  };

  return { employees, getAllEmployees };
});
