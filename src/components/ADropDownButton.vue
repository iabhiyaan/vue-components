<template>
  <div>
    {{ isExpanded }}
    <slot :isExpanded="isExpanded" :handleClick="handleClick">
      <button @click="handleClick">{{ label }}</button>
    </slot>
    <slot v-if="isExpanded" name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'ADropDownButton',
  props: {
    label: {
      type: String,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    handleClick() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
