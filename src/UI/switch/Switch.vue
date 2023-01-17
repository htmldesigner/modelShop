<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div class="switch">
    <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
    <div class="switch__title">Только товары в наличии</div>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__title {
    font-size: 16px;
    margin-left: 15px;
  }
}

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 24px;
  background: #757575;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 22px;
  transition: 0.3s;
}

input:checked + label {
  background: $primaryBlue;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 25px;
}
</style>
