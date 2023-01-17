<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  components: { Header, Footer },
});
</script>

<template>
  <div class="layout">
    <Header />
    <div class="main">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: auto minmax(280px, 1440px) auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";

  .header {
    grid-area: header;
  }

  .main {
    grid-area: main;
    margin: 0 15px;
  }

  .footer {
    grid-area: footer;
  }
}
</style>
