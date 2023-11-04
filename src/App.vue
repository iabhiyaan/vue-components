<script setup>
import HelloWorld from './components/HelloWorld.vue'

import Sidebar from "./components/Sidebar.vue";
import useSidebar from "./composables/useSidebar";
import {computed, ref, watchEffect} from "vue";

const sidebars = [
  {
    key: 'home',
    label: 'Home',
    icon: 'home-icon',
    href: '/'
  },
  {
    key: 'about',
    label: 'About',
    icon: 'about-icon',
    href: '/about'
  },
  {
    key: 'careers',
    label: 'Careers',
    icon: 'careers-icon',
    href: '/careers'
  },
]

const {getSideBarKeySlot, getScopedSideBars} = useSidebar(sidebars)
const homeSlot = getSideBarKeySlot('home')
const careersSlot = getSideBarKeySlot('careers')
const scopedSlotSideBars = ref({})
const homeSidebar = computed(() => scopedSlotSideBars.value?.[homeSlot])
const careersSidebar = computed(() => scopedSlotSideBars.value?.[careersSlot])
const sidebarRef = ref(null)

watchEffect(() => {
  if (sidebarRef.value) {
    const slots = sidebarRef.value?.slots
    scopedSlotSideBars.value = slots && getScopedSideBars(Object.keys(slots))
  }
})

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img alt="Vite logo" class="logo" src="/vite.svg"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img alt="Vue logo" class="logo vue" src="./assets/vue.svg"/>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue"/>
  <pre>{{ scopedSlotSideBars }}</pre>
  <Sidebar ref="sidebarRef" :sidebars="sidebars">
    <template #[homeSlot]>
      <div v-if="homeSidebar" class="flex">
        <span>{{ homeSidebar.icon }}</span>
        <h5>{{ homeSidebar.label }}</h5>
      </div>
    </template>
  </Sidebar>
  <pre>{{ homeSidebar}}</pre>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
