<template>
  <div>
    <header :class="[$style.header]">
      <span :class="[$style.logo]">priceless $hop</span>
      <Cart />
    </header>
    <List />
    <div :class="[$style.btn, $style.showmore]" class="btn showmore">
      Загрузить еще
    </div>
    <p :class="[$style.text]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
      repellat fugit nam hic minus totam nihil facilis! Dolores atque ea earum
      aperiam praesentium exercitationem eaque suscipit autem qui dolor quisquam
      ad odio, minus debitis culpa harum aliquam ab quo asperiores repudiandae
      quas ipsum. Quod natus quo qui odit eum vel itaque, culpa blanditiis sed
      corrupti porro? Voluptate provident recusandae nihil a enim quia iste
      incidunt aut quam quasi illo magni expedita, maiores esse, tenetur saepe
      et iusto voluptatem vitae soluta.
    </p>
    <footer :class="[$style.footer]"><Form /></footer>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue"
import List from "./components/List.vue"
import Form from "./components/Form.vue"

export default {
  components: {
    Cart,
    List,
    Form,
  },
}
</script>

<style module>
:global(*) {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  width: 98%;
  position: fixed;
  left: 0;
  top: 0;
  background: #ffc0cb;
  color: #dc143c;
  padding: 24px;
  display: flex;
  justify-content: space-between;
}

.logo {
  font-size: 18px;
  text-transform: capitalize;
}

.text {
  padding: 15px 30px;
  line-height: 1.5;
  text-align: justify;
}

.showmore {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}

.btn {
  display: inline-block;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: #f08080;
  padding: 4px 12px;
  color: #9400d3;
  user-select: none;
}

.btn:hover {
  background: #dc143c;
  color: #fff;
}

footer {
  width: 100%;
  min-height: 250px;
  background: #8b0000;
  color: #dc143c;
  padding: 40px;
  display: flex;
  justify-content: center;
}
</style>
