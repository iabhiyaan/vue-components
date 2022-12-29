<template>
  <div
    style="position: fixed; z-index: 6000; max-width: 100vw; max-height: 100vh"
    v-if="computedModelValue"
  >
    <div @click="computedModelValue = false" class="backdrop"></div>

    <div class="modal">
      <slot />
    </div>
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
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
}
</style>
