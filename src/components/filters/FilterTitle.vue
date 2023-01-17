<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["show"],
  props: {
    show: {
      type: Boolean,
    },
    title: {
      type: String,
      requred: true,
    },
  },
});
</script>

<template>
  <div class="filter-label" @click="$emit('show', !show)">
    <div class="filter-label__title">{{ title }}</div>
    <ArrowIcon
      class="filter-label__arrow"
      :class="{ 'filter-label__arrow-active': show }"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  cursor: pointer;
  &__title {
    font-size: 16px;
    font-family: "RobotoMedium";
  }
  &__arrow {
    transform: rotate(180deg);
  }
  &__arrow-active {
    transform: rotate(0deg);
  }
}
</style>
