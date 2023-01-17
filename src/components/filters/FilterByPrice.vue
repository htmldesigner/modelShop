<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import FilterTitle from "./FilterTitle.vue";
import MultiRangeSlider from "multi-range-slider-vue";
import Input from "@/UI/input/Input.vue";
export default defineComponent({
  components: { FilterTitle, MultiRangeSlider, Input },
  props: {
    title: {
      type: String,
      requred: true,
    },
    options: {
      type: Array as PropType<Array<string>>,
      requred: true,
    },
  },

  data: () => ({
    show: true,
    barMinValue: 12000,
    barMaxValue: 130000,
  }),

  methods: {
    UpdateValues(e: any) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
  },
});
</script>

<template>
  <div class="filter">
    <FilterTitle :title="title" :show="show" @show="(e) => (show = e)" />

    <div class="multi-range" v-if="show">
      <div class="price-range">
        <Input
          style="width: 98px"
          label="От"
          :id="'from'"
          v-model.number.trim="barMinValue"
        />
        <Input
          style="width: 98px"
          label="До"
          :id="'to'"
          v-model.number.trim="barMaxValue"
        />
      </div>

      <MultiRangeSlider
        :min="1"
        :max="150000"
        :ruler="false"
        :step="1"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
        :label="false"
        @input="UpdateValues"
        :minCaption="''"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  padding-top: 18px;
}
.price-range {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
:deep(.multi-range-slider) {
  box-shadow: none;
  border-radius: 0;
  border: none;
  .bar {
    .bar-left,
    .bar-right {
      box-shadow: none;
      background: #f5f5f5;
      border-radius: 2px;
      padding: 3px 0px;
    }

    .thumb {
      &::before {
        content: "";
        background-color: $primaryBlue;
        position: absolute;
        width: 16px;
        height: 16px;
        border: none;
        box-shadow: none;
        border-radius: 50%;
        z-index: 1;
        margin: -5px;
        cursor: pointer;
      }
      &:active {
        .caption {
          display: none;
        }
      }
    }

    .bar-inner {
      background-color: $primaryBlue;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: space-between;
      position: relative;
      border: solid 1px $primaryBlue;
      justify-content: space-between;
      box-shadow: none;
    }
  }
}
</style>
