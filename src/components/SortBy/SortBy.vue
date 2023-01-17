<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["sortBy"],
  data: () => ({
    isActive: "",
    sortList: [
      { name: "По популярности", value: "reviews" },
      { name: "Рейтингу", value: "rating" },
      { name: "Цене", value: "price" },
      { name: "Скидке", value: "discount" },
      { name: "Обновлению", value: "update" },
    ],
  }),
  methods: {
    handler(value) {
      this.isActive = value;
      this.$emit("sortBy", value);
    },
  },
});
</script>

<template>
  <div class="sorting">
    <div class="sorting__label">
      <span>Сортировать по:</span>
    </div>
    <ul class="sorting__list">
      <li
        class="sorting__item"
        v-for="sort in sortList"
        :key="sort.name"
        @click="handler(sort.value)"
        :class="{ 'sorting__item_active-theme': sort.value === isActive }"
      >
        <span>{{ sort.name }}</span>
        <ArrowStrokeIcon
          :class="{ 'arrow_direction-theme': isActive === 'price' }"
          class="arrow__direction"
          v-if="sort.value === 'price'"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.arrow__direction {
  margin-left: 6px;
}
.sorting {
  display: flex;
  flex-direction: row;
  padding: 26px 0;
  &__label {
    margin-right: 2px;
    color: #bdbdbd;
    font-size: 16px;
  }
  &__list {
    margin: 0;
    padding: 0;
  }
  &__item {
    display: inline;
    margin: 0 5px;
    color: $textColor;
    font-size: 16px;
    cursor: pointer;
    &_active-theme {
      color: $primaryBlue;
    }
    &:hover {
      color: $primaryBlue;
      :deep(svg) {
        path {
          fill: $primaryBlue;
        }
      }
    }
    :deep(.arrow_direction-theme) {
      transform: rotate(-180deg);
    }
  }
}
</style>
