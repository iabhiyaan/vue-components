<template>
  <table cellspacing="1" cell>
    <thead>
      <tr>
        <th v-for="(col, i) in columns" :key="i">{{ col?.label }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="$slots.body">
        <template v-for="(row, i) in rows" :key="row[rowKey]" :id="row[rowKey]">
          <slot name="body" :row="row"></slot>
        </template>
      </template>

      <template v-else>
        <tr v-for="(row, i) in rows" :key="row[rowKey]" :id="row[rowKey]">
          <td v-for="(col, j) in columns" :key="j">
            {{ getRowValueFromCol(row, col) }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ATable',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    rows: {
      type: Array,
      default: () => [],
      required: true,
    },
    'row-key': {
      type: [String],
      default: 'id',
    },
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    getRowValueFromCol(row, col) {
      let value = row[col['name']];

      if (col.hasOwnProperty('field')) {
        value = col.field(row);
      }

      if (col.hasOwnProperty('format')) {
        value = col.format(value);
      }

      return value;
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
