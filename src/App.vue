<script lang="ts">
import { defineComponent, shallowRef } from "vue";

export default defineComponent({
  data: () => ({
    layout: shallowRef("DefaultLayout"),
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component?.default || "DefaultLayout";
        } catch (e) {
          this.layout = "DefaultLayout";
        }
      },
    },
  },
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
