<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  props: {
    value: {
      type: String as PropType<string | number>,
      requred: true,
    },
    count: {
      type: Number as PropType<string | number>,
    },
    selected: {
      type: Array as PropType<string[]>,
    },
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    updateSelected() {
      if (this.checked) {
        this.$emit("update:selected", [
          ...(this.selected as string[]),
          this.value,
        ]);
      } else {
        if (this.selected?.length) {
          this.$emit(
            "update:selected",
            this.selected.filter((v) => v !== this.value)
          );
        }
      }
    },
  },
});
</script>

<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <span>{{ value }}</span>
      <input
        type="checkbox"
        class="checkbox__input"
        @change="updateSelected"
        :value="value"
        v-model="checked"
      />
      <span class="checkbox__mark"></span>
      <div class="checkbox__counter">{{ count }}</div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  &__label {
    margin: 1px 0;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 26px;
    transition: 0.5s ease;
    display: inline-flex;

    &:hover .checkbox__mark {
      border: 2px solid darken($color: $borderColor, $amount: 100);
    }
  }

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkbox__mark {
      background-color: $primaryBlue;
      border: 1px solid $primaryBlue;
    }
  }
  &__input:checked ~ .checkbox__mark:after {
    display: block;
    left: 5px;
    top: 1px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(38deg);
  }
  &__mark {
    transition: 0.15s ease;
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
  &__counter {
    margin-left: 6px;
    color: #bdbdbd;
    font-size: 12px;
    top: 2px;
  }
}
</style>
