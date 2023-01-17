<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeartIcon",

  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: "white",
    },
    stroke: {
      type: String,
      default: "#333333",
    },
    width: {
      type: String,
      default: "20",
    },
    height: {
      type: String,
      default: "18",
    },
  },
});
</script>

<template>
  <svg
    :class="{ hover: hover }"
    :width="width"
    :height="height"
    viewBox="0 0 20 18"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17C-6.99994 6.00002 4.00003 -3 10 3C16 -2.99995 27.0001 6.00006 10 17Z"
      :fill="fill"
      :stroke="stroke"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
.hover {
  &:hover {
    path {
      // fill: lighten($color: $primaryBlue, $amount: 5);
      stroke: $primaryBlue;
    }
  }
}
</style>
