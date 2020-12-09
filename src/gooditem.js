import Button from './button.js'
import AGoodItem from './agi.js'
import GoodItemInCart from './gooditemincart.js'

// класс карточки товара
export default class GoodItem extends AGoodItem {
  // в аргументах применена деструктуризация
  constructor({ name, price }, CartInstance) {
    super({ name, price }, CartInstance)
  }

  render(placeToRender) {
    // находим место куда рендерить
    //если нашли
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

      const AddButton = new Button('В корзину', () => {
        this._cartInstance.add(new GoodItemInCart(this))
      })
      block.querySelector('.btn_holder').appendChild(AddButton.getTemplate())
    }
  }
}
