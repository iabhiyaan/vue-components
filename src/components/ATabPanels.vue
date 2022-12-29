<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ATabPanels',
  props: {
    modelValue: String,
  },
  provide() {
    return {
      aTabPanels: computed(() => this.modelValue),
      setATabPanels: this.setATabPanels,
    };
  },
  computed: {
    computedModelValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
  methods: {
    setATabPanels(val) {
      this.computedModelValue = val;
    },
  },
};
</script>
