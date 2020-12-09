import AbstractList from './abstractlist.js'
import GoodItem from './gooditem.js'

//cписок товаров
export default class List extends AbstractList {
  _cartInstance = null
  _pageCounter = 1

  constructor(CartInstance) {
    super()
    this._cartInstance = CartInstance

    this.initShowMoreBtn()
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    let goodsPromise = this.fetchGoods()
    goodsPromise.then(() => {
      // запускаем рендер
      this.render()
    })
  }

  initShowMoreBtn() {
    const btn = document.querySelector('.showmore')
    btn.addEventListener('click', () => {
      this.fetchGoods().then(() => {
        this.render()
      })
    })
  }

  hideShowMoreBtn() {
    const btn = document.querySelector('.showmore')
    btn.remove()
  }

  fetchGoods() {
    const result = fetch(`./database/page${this._pageCounter}.json`)
    return result
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this._pageCounter++
        this.items.push(
          ...data.data.map((cur) => {
            return new GoodItem(cur, this._cartInstance)
          })
        )
      })
      .catch((e) => {
        this.hideShowMoreBtn()
        console.log(e)
      })
  }

  render() {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
      this.items.forEach((good) => {
        good.render(placeToRender)
      })
    }
  }
}
