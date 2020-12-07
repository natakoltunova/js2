export default class Item {
  name = ''
  price = 0
  // counter = 1
  // //локальн. св-во корзины, в которое в конструкторе передаётся объект корзина
  // _cartInstance = null

  // в аргументах применена деструктуризация
  constructor(name, price) {
    this.name = name
    this.price = price
    // this._cartInstance = CartInstance
  }

  render(placeToRender) {
    // находим место куда рендерить
    // если нашли
    if (placeToRender) {
      // то создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
      block.classList.add('good-item')
      block.innerHTML = `
        <div class="img">
          <img src="./img/bossparts.jpg" />
        </div>
        <div class="meta">
          <div class="meta__row">
            <span class="key">Товар:</span>
            <span class="value">${this.name}</span>
          </div>
          <div class="meta__row">
            <span class="key">Цена:</span>
            <span class="value">${this.price}</span>
          </div>
          <div class="btn_holder"></div>
        </div>
      `
      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)

      //     // const AddButton = new Button('В корзину', () => {
      //     //   this._cartInstance.add(new GoodItemInCart(this))
      //     // })
      //     // block.querySelector('.btn_holder').appendChild(AddButton.getTemplate())
    }
  }
}
