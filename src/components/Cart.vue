<template>
  <div :class="[$style.wrapper]">
    <Button @mySuperEvent="onCartClick">Корзина</Button>
    <div :class="[$style.list]" v-if="opened">
      <div :class="[$style.empty]" v-if="!getItemsInCart.length">
        Список пуст
      </div>
      <div
        :class="[$style.cart_list]"
        v-for="(id, index) in getItemsInCart"
        :key="id + `${index}`"
      >
        <div :class="[$style.cart_good]">
          <div :class="[$style.cart_param]">Товар&nbsp;</div>
          {{ getData[id].name }}
          <div :class="[$style.cart_param]">, цена:&nbsp;</div>
          {{ getData[id].price }}
          <div :class="[$style.cart_param]">&nbsp;рублей&nbsp;</div>
          <Button @mySuperEvent="removeOfCart">Удалить</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    Button,
  },
  data() {
    return {
      opened: false,
    }
  },
  methods: {
    onCartClick() {
      this.opened = !this.opened
    },
    removeOfCart() {},
  },
  computed: {
    ...mapGetters("goods", ["getData", "getItemsInCart"]),
  },
}
</script>

<style module>
.wrapper {
  color: #000;
}
.list {
  background: #fff;
}
.empty {
  position: absolute;
  top: 52px;
  right: 25px;
  min-width: 200px;
  height: 25px;
  border: 3px solid #9400d3;
  color: #9400d3;
  background-color: pink;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.cart_list {
  min-width: 300px;
  padding: 5px;
  border: 3px solid violet;
  background: #eee;
  color: #000;
}

.cart_good {
  display: flex;
}

.cart_param {
  padding-top: 4px;
}
</style>
