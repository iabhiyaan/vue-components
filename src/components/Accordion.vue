<template>
  <div
    @click="isExpanded = !isExpanded"
    style="display: flex; align-items: center"
  >
    <h3>{{ label }}</h3>

    <button style="cursor: pointer; margin-left: 10px">o</button>
  </div>
  <div v-if="isExpanded">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    label: String,
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>
