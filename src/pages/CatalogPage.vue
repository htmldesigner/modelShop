<script lang="ts">
import FilterByValue from "@/components/filters/FilterByValue.vue";
import CategoryList from "@/components/categoryList/CategoryList.vue";
import PageTitle from "@/UI/pageTitle/PageTitle.vue";
import { defineComponent } from "vue";
import FilterByPrice from "@/components/filters/FilterByPrice.vue";
import Selector from "@/UI/selector/Selector.vue";
import Button from "@/UI/buttons/Button.vue";
import ButtonOutline from "@/UI/buttons/ButtonOutline.vue";
import Switch from "@/UI/switch/Switch.vue";
import Card from "@/components/Card.vue";
import products from "@/data/data.json";
import type { IProduct } from "@/interfaces/IProduct";
import SortBy from "@/components/SortBy/SortBy.vue";
import BoxIcon_4 from "@/UI/icons/BoxIcon_4.vue";
import BoxIcon_8 from "@/UI/icons/BoxIcon_8.vue";
export interface IFilterValue {
  name: string;
  count: number;
}

export default defineComponent({
  components: {
    FilterByValue,
    CategoryList,
    PageTitle,
    FilterByPrice,
    Selector,
    Button,
    ButtonOutline,
    Switch,
    Card,
    SortBy,
    BoxIcon_4,
    BoxIcon_8,
  },
  data: () => ({
    products: products,
    manufacturer: [] as IFilterValue[],
    scale: [] as IFilterValue[],
    showByCategoryId: [] as number[],
    productList: [] as IProduct[],
    filterByScale: [],
    changeCardWidth: false,
    sort: "",
  }),
  computed: {},
  watch: {
    showByCategoryId: {
      handler(value) {
        this.setProductList(value);
      },
      deep: true,
    },
  },
  methods: {
    setValue(e: Number) {},
    reloadFilter() {},
    saveFilter() {},
    setCategoryId(id: number) {
      if (this.showByCategoryId.includes(id)) {
        this.showByCategoryId = this.showByCategoryId.filter((n) => n != id);
      } else {
        this.showByCategoryId.push(id);
      }
    },

    setProductList(
      value: Array<string | number> = [],
      sortBy: keyof IProduct = "category_id"
    ) {
      let result: IProduct[] = [];
      this.products.forEach((p) => {
        if (p.products.length) {
          result.push(...p.products);
        }
      });

      if (!value.length) {
        return (this.productList = [...result]);
      }
      this.productList = [...result.filter((el) => value.includes(el[sortBy]))];
      result = [];
    },

    getFilterValue(property: keyof IProduct) {
      let result: { [key: string]: number } = {};

      result = this.products.reduce((acc, el) => {
        el.products.forEach((p) => {
          acc[p[property]] = (acc[p[property]] || 0) + 1;
        });
        return acc;
      }, {} as { [key: string]: number });

      return Object.entries(result).map(([name, count]) => ({ name, count }));
    },
    selectedByManufacturerOptions(options: string[]) {
      this.setProductList(options, "manufacturer");
    },
    selectedByScaleOptions(options: string[]) {
      this.setProductList(options, "scale");
    },

    sortBy(sort: string) {
      this.productList.sort((a, b) => b[sort] - a[sort]);
    },
  },
  mounted() {
    this.manufacturer = this.getFilterValue("manufacturer");
    this.scale = this.getFilterValue("scale");
    this.setProductList();
  },
});
</script>

<template>
  <PageTitle title="Каталог" :productCount="1223" />

  <div class="container">
    <section class="sidebar">
      <CategoryList :category="products" @showByCategoryId="setCategoryId" />

      <FilterByValue
        title="Производитель"
        :options="manufacturer"
        @selectedOptions="selectedByManufacturerOptions"
      />

      <FilterByValue
        title="Масштаб"
        :options="scale"
        @selectedOptions="selectedByScaleOptions"
      />

      <FilterByPrice title="Цена" />

      <Selector
        label="Показывать на странице"
        @value="setValue"
        :options="[
          { name: '10 товаров', value: 10 },
          { name: '50 товаров', value: 50 },
          { name: '100 товаров', value: 100 },
        ]"
      />

      <Switch style="margin-top: 16px" />

      <Button theme="outline" style="margin-top: 16px" @click="reloadFilter">
        Сбросить товары
      </Button>

      <ButtonOutline
        @click="saveFilter"
        icon="HeartIcon"
        style="margin-top: 16px"
        >Сохранить подборку</ButtonOutline
      >
    </section>

    <section class="content">
      <div class="sorting">
        <sortBy @sortBy="sortBy" />

        <div class="product-toggler">
          <BoxIcon_8
            @click="changeCardWidth = !changeCardWidth"
            :active="changeCardWidth"
          />
          <BoxIcon_4
            @click="changeCardWidth = !changeCardWidth"
            :active="changeCardWidth"
          />
        </div>
      </div>

      <div
        class="product-list"
        :class="{ 'product-list_change-width': changeCardWidth }"
      >
        <Card
          v-for="product in productList"
          :key="product.id"
          :options="product"
          :class="{ card_scale: changeCardWidth }"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.product-toggler {
  & > :first-child {
    margin: 0 14px;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 0px 32px;
}
.sorting {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 400px));
  grid-auto-rows: minmax(362px, 395px);
  gap: 0px 32px;
  &_change-width {
    grid-template-columns: repeat(5, minmax(0, 400px));
    grid-auto-rows: minmax(322px, 362px);
  }
}
.sidebar {
  background-color: #fff;
  display: inline-block;
  padding: 16px;
  border-radius: 16px;
  width: 240px;
}
</style>
