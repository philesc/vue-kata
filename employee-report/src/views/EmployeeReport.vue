<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 },
];
</script>

<template>
  <DataTable :value="employees" tableStyle="min-width: 50rem">
    <Column field="name" header="Name"></Column>
    <Column field="age" header="Age"></Column>
  </DataTable>
</template>

<style scoped>
</style>
