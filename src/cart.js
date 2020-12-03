import AbstractList from './abstractlist.js'
import Button from './button.js'

export default class Cart extends AbstractList {
  constructor() {
    super()
    //запускаем inin()+внизу
    this.init()
  }

  //ф-ция инициализации корзины
  init() {
    const block = document.createElement('div')
    block.classList.add('cart')

    //тело корзины
    const list = document.createElement('div')
    list.classList.add('cart_list')
    block.appendChild(list)

    //кнопка подключена ч/з button.js, создадим тут ее экземпляр
    const ButtonInstance = new Button('Корзина', () => {
      //видимость содержимого по клику
      list.classList.toggle('shown')
    })
    //метод из button.js, рендерим в block
    block.appendChild(ButtonInstance.getTemplate())

    const placeToRender = document.querySelector('header')
    if (placeToRender) {
      placeToRender.appendChild(block)
    }
    this.render()
  }
  render() {
    const placeToRender = document.querySelector('.cart_list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
      if (this.items.length) {
        this.items.forEach((good) => {
          good.render(placeToRender)
        })
      } else {
        placeToRender.innerHTML = 'Нет товаров в корзине!'
      }
    }
  }
}

const CartInstance = new Cart()
