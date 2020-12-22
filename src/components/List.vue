<template>
  <div :class="[$style.goodslist]">
    <Goodcard v-for="id in getItemsOnPage" :key="id" :id="id" />
  </div>
</template>

<script>
import Goodcard from "./Goodcard.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    Goodcard,
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    ...mapActions("goods", ["requestData"]),
  },
  computed: {
    ...mapGetters("goods", ["getItemsOnPage"]),
  },
  mounted() {
    this.requestData(1)
  },
}
</script>

<style module>
.goodslist {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px 20px 20px;
}
</style>
