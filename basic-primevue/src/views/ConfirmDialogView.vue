<script setup>
import Button from 'primevue/button';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();


const onDeleteButton = () => {
  confirm.require({
    message: 'Are you sure you want to delete?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
        //callback to execute when user confirms the action
        console.log('Ok')
    },
    reject: () => {
        //callback to execute when user rejects the action
        console.log('Reject')

    }
  });
}


</script>

<template>
  <ConfirmDialog id="confirm"/>
  <main>
    <h1>Confirm Dialog</h1>
    <Button @click="onDeleteButton()" icon="pi pi-trash" label="Delete" class="p-button-danger"></Button>
  </main>
</template>
