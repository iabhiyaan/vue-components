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

    <div class="section">
      <h3>Tab With Tab Panels Component</h3>

      <ATabs v-model="tab">
        <ATab name="mails" label="Mails" />
        <ATab name="alarms" label="Alarms" />
      </ATabs>

      <ATabPanels v-model="tab">
        <ATabPanel name="mails">
          <div>
            Mails: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, vitae. Cumque dicta maiores rem architecto aperiam,
            explicabo iure minus sint optio, laborum adipisci excepturi
            inventore impedit voluptatum quaerat unde harum!
          </div>
        </ATabPanel>

        <ATabPanel name="alarms">
          <div>
            Alarms: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, vitae. Cumque dicta maiores rem architecto aperiam,
            explicabo iure minus sint optio, laborum adipisci excepturi
            inventore impedit voluptatum quaerat unde harum!
          </div>
        </ATabPanel>
      </ATabPanels>
    </div>

    <div class="section">
      <h3>Accordion Component</h3>

      <Accordion label="Header">
        <div style="margin-left: 10px">
          <div style="margin-left: 10px">
            Body: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sapiente libero at illum porro quis molestiae eveniet natus facere
            aliquid, cum ab mollitia quas doloribus soluta officiis ea cumque
            culpa modi.
          </div>
        </div>
      </Accordion>

      <Accordion label="Footer">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          libero at illum porro quis molestiae eveniet natus facere aliquid, cum
          ab mollitia quas doloribus soluta officiis ea cumque culpa modi.
        </div>
      </Accordion>
    </div>

    <div class="section">
      <h3>Accordion With Nested Component</h3>

      <Accordion label="Header">
        <div style="margin-left: 10px">
          <Accordion label="Body">
            <div style="margin-left: 10px">
              Body: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente libero at illum porro quis molestiae eveniet natus facere
              aliquid, cum ab mollitia quas doloribus soluta officiis ea cumque
              culpa modi.
            </div>
          </Accordion>
        </div>
      </Accordion>

      <Accordion label="Footer">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          libero at illum porro quis molestiae eveniet natus facere aliquid, cum
          ab mollitia quas doloribus soluta officiis ea cumque culpa modi.
        </div>
      </Accordion>
    </div>
  </div>
</template>

<script>
import ATable from './components/ATable.vue';
import ADialog from './components/ADialog.vue';
import ATabs from './components/ATabs.vue';
import ATab from './components/ATab.vue';
import ATabPanels from './components/ATabPanels.vue';
import ATabPanel from './components/ATabPanel.vue';

import Accordion from './components/Accordion.vue';

export default {
  name: 'App',
  components: {
    ATable,
    ADialog,
    ATabs,
    ATab,
    ATabPanels,
    ATabPanel,
    Accordion,
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
