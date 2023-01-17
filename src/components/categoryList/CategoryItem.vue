<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    active: false,
  }),
  props: {
    item: {
      type: String,
      requered: true,
    },
    id: {
      type: Number,
      requered: true,
    },
  },
});
</script>

<template>
  <li @click="active = !active">
    <a class="category__item" href="#">{{ item }}</a>
    <CheckMarkIcon v-if="active" />
  </li>
</template>

<style lang="scss" scoped></style>
