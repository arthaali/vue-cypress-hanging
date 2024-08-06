<script setup lang="ts">
import {ref} from "vue"
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";

const isDisabled = ref<boolean>(false);

</script>

<template>
  <main>
    <input type="checkbox" v-model="isDisabled" />
    <Test v-if="isDisabled" />
    <Test2></Test2>
  </main>
</template>
