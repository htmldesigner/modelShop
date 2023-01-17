<script lang="ts">
import { defineComponent, ref } from "vue";
import CategoryItem from "./CategoryItem.vue";
import type { PropType } from "vue";
import type { IRootObject } from "@/interfaces/IProduct";
export default defineComponent({
  components: { CategoryItem },
  emits: ["showByCategoryId"],
  props: {
    category: {
      type: Array as PropType<IRootObject[]>,
    },
  },
});
</script>

<template>
  <div class="category">
    <div class="category__title"><span>Категории</span></div>

    <ul class="category__list">
      <CategoryItem
        v-for="item of category"
        :key="item.category.id"
        :item="item.category.name"
        @click="$emit('showByCategoryId', item.category.id)"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.category {
  &__title {
    font-size: 16px;
    font-family: "RobotoMedium";
    margin-bottom: 8px;
  }
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    > * {
      padding: 8px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  :deep(.category__item) {
    text-decoration: none;
    font-size: 14px;
    color: $textColor;
    transition: color 0.25s ease;
    line-height: 20px;
    &:hover {
      color: #39b6d1;
    }
  }
}
</style>
