declare module "multi-range-slider-vue" {
  import { Component, Prop, Vue } from "vue-property-decorator";
  export default class MultiRangeSlider extends Vue {
    @Prop({ default: 0 }) min!: number;
    @Prop({ default: 100 }) max!: number;
    @Prop({ default: true }) ruler!: boolean;
    @Prop({ default: 1 }) step!: number;
    @Prop({ default: 0 }) minValue!: number;
    @Prop({ default: 100 }) maxValue!: number;
    @Prop({ default: true }) label!: boolean;
    @Prop({ default: "" }) minCaption!: string;
  }
}
