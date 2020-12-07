import Button from './button.js'
import GoodItemInCart from './gooditemincart.js'
import Item from './item.js'

// класс карточки товара
export default class GoodItem extends Item {
  counter = 1
  _cartInstance = null

  constructor({ props }, CartInstance) {
    super(props)
    this._cartInstance = CartInstance
  }

  render(placeToRender) {
    if (placeToRender) {
      const AddButton = new Button('В корзину', () => {
        this._cartInstance.add(new GoodItemInCart(this))
      })
      block.querySelector('.btn_holder').appendChild(AddButton.getTemplate())
    }
  }
}
