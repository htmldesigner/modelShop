<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxIcon_4",
  props: {
    active: {
      type: Boolean,
    },
  },
  computed: {
    isActive() {
      if (!this.active) {
        return "#279FB9";
      } else {
        return "#E0E0E0";
      }
    },
  },
});
</script>

<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="8" rx="2" :fill="isActive" />
    <rect y="10" width="8" height="8" rx="2" :fill="isActive" />
    <rect x="10" width="8" height="8" rx="2" :fill="isActive" />
    <rect x="10" y="10" width="8" height="8" rx="2" :fill="isActive" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}
</style>
