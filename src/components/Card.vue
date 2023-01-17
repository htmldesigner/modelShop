<script lang="ts">
import StarRating from "@/UI/rating/StarRating.vue";
import { defineComponent } from "vue";
import image from "@/assets/image/image.png";
import Button from "@/UI/buttons/Button.vue";
import type { IProduct } from "@/interfaces/IProduct";
import type { PropType } from "vue";
export default defineComponent({
  components: { StarRating, Button },
  props: {
    options: {
      type: Object as PropType<IProduct>,
    },
  },
  data: () => ({
    image: image,
    favorite: false,
  }),

  methods: {
    addFavorites() {
      this.favorite = !this.favorite;
    },
    quickView() {},
    addCard(id: number | undefined) {},
  },
});
</script>

<template>
  <article class="card card_preview">
    <div class="card__content">
      <div class="card__favorites">
        <HeartIcon
          :hover="true"
          @click="addFavorites"
          :fill="favorite ? '#279fb9' : '#fff'"
          :stroke="favorite ? '#279fb9' : '#333'"
        />
      </div>

      <figure>
        <div class="card__image">
          <div class="card__quick-view">
            <span @click="quickView" class="card__quick-view-button"
              >Быстрый просмотр</span
            >
          </div>
          <img :src="image" />
        </div>
      </figure>

      <div class="card__info">
        <div class="card__price">{{ options?.price }} ₽</div>
        <div class="card__text">{{ options?.product }}</div>

        <div class="card__scale">{{ options?.scale }}</div>
        <div class="card__manufacturer">{{ options?.manufacturer }}</div>

        <div class="card__rating">
          <StarRating :max="5" :current="options?.rating" />
        </div>
        <div class="card__reviews">{{ options?.reviews }} отзывов</div>

        <div class="card__button">
          <Button theme="primary" @click="addCard(options?.id)"
            >В корзину</Button
          >
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  // min-height: 395px;
  border-radius: 16px;
  width: 100%;
  cursor: pointer;
  &__content {
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    // border: 1px solid #000;
  }
  &__favorites {
    position: absolute;
    z-index: 10;
    top: 8px;
    right: 8px;
    display: none;
  }
  &__quick-view {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
  &__quick-view-button {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 6px;
    z-index: 10;
    font-size: 12px;
    font-family: "RobotoMedium";
    transition: 0.25s ease;
    &:hover {
      color: $primaryBlue;
    }
  }
  &__image {
    border-radius: 16px 16px 0px 0px;
    overflow: hidden;
    height: auto;
    margin-bottom: 6px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  &__info {
    margin: 0 8px 6px;
  }
  &__price {
    font-size: 20px;
    font-family: "RobotoMedium";
    margin-bottom: 4px;
  }
  &__text {
    font-size: 12px;
    margin-bottom: 14px;
  }
  &__scale {
    background: #ed7853;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    display: inline;
    padding: 4px 8px;
    margin-right: 8px;
  }
  &__manufacturer {
    display: inline;
    color: #424242;
    font-size: 12px;
  }
  &__rating {
    margin: 5px 0px 0 5px;
  }
  &__reviews {
    color: #bdbdbd;
    font-size: 12px;
  }
  &__button {
    margin: 6px 0 0px 0;
    display: none;
  }
  &_preview {
    &:hover {
      box-shadow: 0px 4px 16px rgb(0 0 0 / 10%);
      .card__quick-view {
        display: flex;
      }
      .card__favorites {
        display: block;
      }
      .card__button {
        display: block;
      }
    }
  }
  &_scale {
    // min-height: 362px;
    .card__scale {
      font-size: 12px;
    }
    .card__text {
      margin-bottom: 6px;
    }
  }
}
</style>
