<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxIcon_8",
  props: {
    active: {
      type: Boolean,
    },
  },
  computed: {
    isActive() {
      if (this.active) {
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
    <rect width="5.29412" height="5.29" rx="1" :fill="isActive" />
    <rect x="6.35291" width="5.29412" height="5.29" rx="1" :fill="isActive" />
    <rect x="12.7059" width="5.29412" height="5.29" rx="1" :fill="isActive" />
    <rect y="6.34998" width="5.29412" height="5.29" rx="1" :fill="isActive" />
    <rect
      x="6.35291"
      y="6.34998"
      width="5.29412"
      height="5.29"
      rx="1"
      :fill="isActive"
    />
    <rect
      x="12.7059"
      y="6.34998"
      width="5.29412"
      height="5.29"
      rx="1"
      :fill="isActive"
    />
    <rect y="12.7" width="5.29412" height="5.29" rx="1" :fill="isActive" />
    <rect
      x="6.35291"
      y="12.7"
      width="5.29412"
      height="5.29"
      rx="1"
      :fill="isActive"
    />
    <rect
      x="12.7059"
      y="12.7"
      width="5.29412"
      height="5.29"
      rx="1"
      :fill="isActive"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}
</style>
