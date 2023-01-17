<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["theme"],
});
</script>

<template>
  <button :class="['button', `button_${theme}_theme`]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
  border: 2px solid #bdbdbd;
  font-size: 14px;
  font-family: "RobotoMedium";
  background: transparent;
  cursor: pointer;
  width: 100%;
  transition: 0.25s ease;
  &_outline_theme {
    &:hover {
      border-color: $primaryBlue;
    }
    &:active {
      background: darken($color: $bgColor, $amount: 2);
    }
  }

  &_primary_theme {
    background: $primaryBlue;
    border: none;
    color: #fff;
    &:hover {
      color: $textColor;
      background: $accentYellow;
      border-color: $accentYellow;
    }
    &:active {
      background: darken($color: $accentYellow, $amount: 2);
    }
  }
}
</style>
