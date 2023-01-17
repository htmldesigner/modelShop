<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowStrokeIcon",
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
        return "#999";
      }
    },
  },
});
</script>
<template>
  <svg
    width="6"
    height="11"
    viewBox="0 0 6 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5286 0.86201C2.78895 0.601661 3.21106 0.601661 3.4714
       0.86201L5.80474 3.19534C6.06509 3.45569 6.06509 3.8778 5.80474 4.13815C5.54439 4.3985 
       5.12228 4.3985 4.86193 4.13815L3.66667 2.94289V10.0001C3.66667 10.3683 3.36819 10.6667 
       3 10.6667C2.63181 10.6667 2.33333 10.3683 2.33333 10.0001V2.94289L1.13807 4.13815C0.877722 
       4.3985 0.455612 4.3985 0.195262 4.13815C-0.0650875 3.8778 -0.0650875 3.45569 0.195262 3.19534L2.5286 0.86201Z"
      :fill="isActive"
    />
  </svg>
</template>

<style lang="scss" scoped></style>
