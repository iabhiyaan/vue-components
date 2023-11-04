<script setup>
import {useSlots} from "vue";
import useSidebar from "../composables/useSidebar";

const props = defineProps({
  sidebars: {
    type: Array,
    required: true
  }
})
const slots = useSlots()
const {getSideBarKeySlot} = useSidebar(props.sidebars)
const hasSideBarKeySlot = key => slots?.[getSideBarKeySlot(key)]

defineExpose({
  slots
})
</script>
<template>
  <div v-for="sidebar in sidebars" :key="sidebar.label">
    <div class="flex">
      <template v-if="hasSideBarKeySlot(sidebar.key)">
        <slot :name="getSideBarKeySlot(sidebar.key)"></slot>
      </template>
      <template v-else>
        <span>{{ sidebar.label }}</span>
        <div class="mr-2">{{ sidebar.icon }}</div>
      </template>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>