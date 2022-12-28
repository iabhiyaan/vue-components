<template>
  <div style="display: flex; justify-content: between">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'ATabs',
  props: {
    modelValue: String,
  },
  provide() {
    return {
      aTabs: computed(() => this.computedModelValue),
      setTabs: this.setTabs,
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
    setTabs(val) {
      this.computedModelValue = val;
    },
  },
};
</script>
