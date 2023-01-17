<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
    },
    icon: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
});
</script>

<template>
  <div class="search" :class="{ search__label_theme: label?.length }">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      class="search__input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <component v-if="icon" :is="icon" class="search__icon" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  height: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 5px 0;
  width: 100%;

  &__input {
    border-radius: 9px;
    font-size: 14px;
    background: #fff;
    border: 1px solid $borderColor;
    padding: 4px 12px;
    height: 36px;
    width: 100%;
    outline: 0;
    transition: 0.25s ease;
    color: $textColor;
    &:focus,
    &:hover {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1);
      border-color: rgba(0, 0, 0, 1);
    }
  }
  &__icon {
    position: absolute;
    right: 15px;
    // top: 13px;
    cursor: auto;
  }
}
.search__label_theme {
  flex-direction: column;
  align-items: baseline;
  font-size: 12px;
  color: $textGray;
}
</style>
