<template>
  <div class="wrapper">
    <div class="color" :class="backgroundClass"></div>
    <div class="value">{{ props.value }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
  value?: number;
}>();

const backgroundClass = props.value ? `bg-color-${props.color}-${props.value}` : `bg-color-${props.color}`;
</script>

<style scoped>
.color {
  aspect-ratio : 1 / 1;
  border-radius: 20px;
}

.value {
  margin-top: 5px;
  text-align: center;
}
</style>
