<template>
  <div style="z-index: 999" v-if="computedModelValue">
    <slot />
    <div @click="computedModelValue = false" class="backdrop"></div>
  </div>
</template>

<script>
export default {
  name: 'ADialog',
  props: {
    modelValue: Boolean,
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

<style>
.backdrop {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}
</style>
