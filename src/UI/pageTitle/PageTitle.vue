<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    productCount: { type: Number },
  },
});
</script>

<template>
  <div class="title">
    <h1 class="title__text">{{ title }}</h1>
    <p v-if="productCount" class="title__subtitle">
      {{ productCount }} товаров
    </p>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 15px 0;
  &__text {
    font-family: "PTSansBold";
  }
  &__subtitle {
    color: #bdbdbd;
    font-size: 14px;
    margin-left: 8px;
  }
}
</style>
