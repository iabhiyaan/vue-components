<script setup>
import { ref } from "vue";
const products = ref([]);
const response = await fetch("https://fakestoreapi.com/products/");
products.value = await response.json();
</script>

<template>
  <div>
    Products
    <pre><code>{{ products.length }}</code></pre>
  </div>
</template>

<style lang="scss" scoped></style>
