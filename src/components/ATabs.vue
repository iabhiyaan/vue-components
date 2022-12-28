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
      aTabs: this.computedModelValue,
      setTabs(val) {
        this.computedModelValue = val;
        console.log(this.computedModelValue);
      },
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
};
</script>
