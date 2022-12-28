<template>
  <div
    style="margin: 10px; cursor: pointer"
    :class="{ active: aTabs.value === name }"
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
  mounted() {
    console.log(this.aTabs.value);
  },
};
</script>

<style>
.active {
  border-bottom: 1px solid;
}
</style>
