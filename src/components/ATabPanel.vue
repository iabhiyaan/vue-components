<template>
  <div v-if="aTabPanels.value === name">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ATabPanel',
  inject: ['aTabPanels', 'setATabPanels'],
  props: {
    name: String,
  },
};
</script>
