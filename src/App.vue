<template>
  <div>
    Table Component
    <ATable title="Treats" :rows="rows" :columns="columns" />
  </div>
</template>

<script>
import ATable from './components/ATable.vue';
export default {
  name: 'App',
  components: {
    ATable,
  },
  computed: {
    columns() {
      return [
        {
          name: 'id',
          label: 'Id',
          align: 'left',
          field: (row) => {
            return row.id;
          },
          format: (val) => `${val}`,
        },
        {
          name: 'name',
          label: 'Name',
          align: 'left',
          field: (row) => {
            return row.obj.name;
          },
          format: (val) => `mono-${val}`,
        },
        {
          name: 'calories',
          label: 'Calories',
          align: 'left',
          field: (row) => row.calories,
          format: (val) => `${val / 100} %`,
        },
        {
          name: 'fat',
          label: 'Fat',
          align: 'left',
          field: (row) => row.calories,
          format: (val) => `${val / 100} %`,
        },
      ];
    },
    rows() {
      return [
        {
          id: 1,
          calories: 10,
          fat: 1,
          obj: {
            name: 'Abhiyan',
          },
        },
        {
          id: 2,
          calories: 11,
          fat: 3,
          obj: {
            name: 'Shrestha',
          },
        },
      ];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
