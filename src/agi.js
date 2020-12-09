// класс карточки товара
export default class AGoodItem {
  name = ''
  price = 0
  counter = 1
  //локальн. св-во корзины, в которое в конструкторе передаётся объект корзина
  _cartInstance = null

  // в аргументах применена деструктуризация
  constructor({ name, price }, CartInstance) {
    this.name = name
    this.price = price
    this._cartInstance = CartInstance
  }

  render(placeToRender) {
  }
}
