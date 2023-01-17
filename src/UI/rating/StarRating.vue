<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["max", "current"],

  computed: {
    getRating: function () {
      return (this.current / this.max) * 100;
    },
  },
});
</script>

<template>
  <div class="star-rating">
    <span v-for="n in max" :key="n">&star;</span>
    <div class="star-rating__current" :style="{ width: getRating + '%' }">
      <span v-for="n in max" :key="n">&starf;</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.star-rating {
  color: #fed833;
  display: inline-block;
  font-size: 22px;
  position: relative;
  transform: translate(-6px);
  line-height: 1;
}

.star-rating__max,
.star-rating__current {
  position: absolute;
  top: 0;
}

.star-rating__current {
  overflow: hidden;
  white-space: nowrap;
}
</style>
