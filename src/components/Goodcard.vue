<template>
  <div :class="[$style.gooditem]">
    <!-- <div>
      <img :src="image" />
    </div> -->
    <div class="meta">
      <div :class="[$style.meta__row]">
        <span class="key">Товар:</span>
        <span class="value">{{ currentItem.name }}</span>
      </div>
      <div :class="[$style.meta__row]">
        <span class="key">Цена:</span>
        <span class="value">{{ currentItem.price }}</span>
      </div>
      <Button @mySuperEvent="onBuyClick">Купить</Button>
    </div>
  </div>
</template>

<script>
// import image from "./assets/bossparts.jpg"
import Button from "./Button.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    Button,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("goods", ["getData"]),
    currentItem() {
      return this.getData[this.id] || {}
    },
  },
  methods: {
    ...mapActions("goods", ["addInCart"]),
    onBuyClick() {
      this.addInCart(this.id)
    },
  },
}
</script>

<style module>
.gooditem {
  background: #eee;
  padding: 20px;
  margin: 10px;
  min-width: 200px;
}

.meta__row {
  margin: 8px 0;
}
</style>
