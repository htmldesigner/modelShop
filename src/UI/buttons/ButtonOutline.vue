<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
    },
  },
});
</script>

<template>
  <button class="button button-outline_theme">
    <slot></slot>
    <component
      v-if="icon"
      :is="icon"
      width="13"
      height="13"
      fill="none"
      class="button__icon"
    />
  </button>
</template>

<style lang="scss" scoped>
.button {
  &__icon {
    margin-left: 12px;
  }
}
.button-outline_theme {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
  border: transparent;
  font-size: 14px;
  font-family: "RobotoMedium";
  background: transparent;
  cursor: pointer;
  width: 100%;
  transition: 0.25s ease;
  &:hover {
    color: $primaryBlue;
  }
}
</style>
