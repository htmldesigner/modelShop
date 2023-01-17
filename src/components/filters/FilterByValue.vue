<script lang="ts">
import CheckBoxInput from "@/UI/checkbox/CheckBoxInput.vue";
import Input from "@/UI/input/Input.vue";
import FilterTitle from "./FilterTitle.vue";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IFilterValue } from "@/pages/CatalogPage.vue";

export default defineComponent({
  components: { Input, CheckBoxInput, FilterTitle },
  emits: ["selectedOptions"],
  props: {
    title: {
      type: String,
      requred: true,
    },
    options: {
      type: Array as PropType<IFilterValue[]>,
      requred: true,
    },
  },
  data: () => ({
    show: true,
    inputValue: "",
    selectedOptions: [] as string[],
  }),
  computed: {
    optionsValue() {
      if (!this.inputValue.length) {
        return this.options;
      } else {
        return this.options?.filter((el) =>
          el.name.toLowerCase().includes(this.inputValue.toLowerCase())
        );
      }
    },
  },
  watch: {
    selectedOptions: {
      handler() {
        this.$emit("selectedOptions", this.selectedOptions);
      },
    },
  },
});
</script>

<template>
  <div class="filter">
    <FilterTitle :title="title" :show="show" @show="(e) => (show = e)" />

    <div class="filter__wraper" v-if="show">
      <Input
        v-model="inputValue"
        placeholder="Поиск..."
        type="text"
        icon="SearchIcon"
      />

      <div class="filter__list">
        <CheckBoxInput
          v-for="option in optionsValue"
          :key="option.name"
          :value="option.name"
          :count="option.count"
          v-model:selected="selectedOptions"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  padding-top: 18px;
  ::-webkit-scrollbar {
    width: 4px;
    // height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(177 177 177 / 50%);
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
  &__wraper {
    transition: 5s ease;
    transform: translateY(0, 300px);
  }
  &__list {
    margin-top: 5px;
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
