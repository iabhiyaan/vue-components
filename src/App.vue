<template>
  <div>
    <div class="section">
      Table Component
      <ATable title="Treats" :rows="rows" :columns="columns" />
    </div>

    <div class="section">
      Dialog Component
      <button @click="dialog = !dialog">Open Dialog</button>
    </div>

    <ADialog v-model="dialog">
      <div
        style="display: flex; align-items: center; background-color: #ff8080"
      >
        <h3>Hello World</h3>
        <button style="margin-left: 10px" @click="dialog = false">X</button>
      </div>
    </ADialog>

    <div class="section">
      <h3>Tabs Component</h3>

      {{ tab }}
      <ATabs v-model="tab">
        <ATab name="mails" label="Mails" />
        <ATab name="alarms" label="Alarms" />
      </ATabs>
    </div>
  </div>
</template>

<script>
import ATable from './components/ATable.vue';
import ADialog from './components/ADialog.vue';
import ATabs from './components/ATabs.vue';
import ATab from './components/ATab.vue';

export default {
  name: 'App',
  components: {
    ATable,
    ADialog,
    ATabs,
    ATab,
  },
  data() {
    return {
      dialog: false,
      tab: 'mails',
    };
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

.section {
  margin: 10px;
}
</style>
