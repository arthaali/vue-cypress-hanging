<script lang="ts" setup>
import { watchEffect } from "vue";

watchEffect(() => {
    throw new Error(`Just an error`);
});
</script>
<template>
    <div>I am a test</div>
</template>
