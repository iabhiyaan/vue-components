<template>
  <div
    style="margin: 10px; cursor: pointer"
    :class="{ active: tabValue === name }"
    @click="setTabs(name)"
  >
    <slot />
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'ATab',
  props: {
    name: String,
    label: String,
  },
  inject: ['aTabs', 'setTabs'],
  computed: {
    tabValue() {
      return this.aTabs.value;
    },
  },
};
</script>

<style>
.active {
  border-bottom: 1px solid;
}
</style>
