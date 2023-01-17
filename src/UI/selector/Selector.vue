<script lang="ts">
interface IOptions {
  name: string;
  value: number;
}

import { defineComponent } from "vue";
import ArrowIcon from "../icons/ArrowIcon.vue";
import type { PropType } from "vue";
export default defineComponent({
  components: { ArrowIcon },
  emits: ["value"],
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array as PropType<Array<IOptions>>,
      requered: true,
    },
  },

  data: () => ({
    showDropDown: false,
    selectedValue: { name: "", value: 0 },
  }),

  methods: {
    handlerEventEmmit(event: IOptions) {
      this.$emit("value", event.value);
      this.selectedValue = event;
      this.showDropDown = false;
    },
  },

  mounted() {
    if (this.options?.length) {
      this.selectedValue = this.options[Math.floor(this.options?.length / 2)];
      this.$emit("value", this.selectedValue);
    }
  },
});
</script>

<template>
  <div class="selector">
    <div class="selector__label" v-if="label?.length">
      <span>{{ label }}</span>
    </div>

    <div
      class="selector__box"
      :class="{ 'selector__active-them': showDropDown }"
      @click="showDropDown = !showDropDown"
    >
      <div class="selector__text">
        <span>{{ selectedValue?.name }}</span>
      </div>
      <ArrowIcon
        class="selector__arrow"
        :class="{ 'selector__arrow-active': showDropDown }"
      />
    </div>

    <div class="seed" v-if="showDropDown">
      <ul class="seed__list">
        <li
          class="seed__item"
          v-for="option in options"
          :key="option.value"
          @click="handlerEventEmmit(option)"
        >
          <span>{{ option.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selector {
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
  padding-top: 18px;
  &__label {
    font-size: 12px;
    color: $textGray;
  }
  &__box {
    border: 1px solid $borderColor;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    border-radius: 9px;
    padding: 4px 12px;
    height: 36px;
    background: #ffffff;
    transition: 0.25s ease;
    &:hover {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1);
      border-color: rgba(0, 0, 0, 1);
    }
  }
  &__text {
    font-size: 14px;
  }

  &__arrow {
    transform: rotate(180deg);
  }
  &__arrow-active {
    transform: rotate(0deg);
  }
  &__active-them {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 1);
    border-color: rgba(0, 0, 0, 1);
  }
}
.seed {
  background: #ffffff;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  z-index: 99;
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  max-height: 300px;
  overflow-y: scroll;

  &__list {
    margin: 0;
    padding: 0 4px;
  }
  &__item {
    margin: 12px 0;
    list-style: none;
    cursor: pointer;
  }
}
</style>
