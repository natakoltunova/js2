//в этом классе будет функционал для любых списков
class AbstractList {
  items = []

  //конструктор, который инициализирует массив
  constructor(item = []) {
    this.item = []
  }

  add(item) {
    const findedItem = this.items.find((fitem) => {
      return fitem.name === item.name
    })

    const addedPromise = new Promise((resolve) => {
      if (findedItem) {
        findedItem.counter++
      } else {
        this.items.push(item)
      }
      resolve()
    })

    addedPromise.then(this.render.bind(this))
  }

  // remove(item) {}

  render() {
    // Проходимся по каждому такому объекту из массива и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this.items.forEach((good) => {
      good.render() //у каждого товара вызываем его метод render
    })
  }
}

//cписок товаров
class List extends AbstractList {
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
    const result = fetch(
      `http://localhost:3000/database/page${this._pageCounter}.json`
    )
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

class Cart extends AbstractList {
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

// класс карточки товара
class GoodItem {
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

class GoodItemInCart extends GoodItem {
  constructor(props) {
    super(props)
  }
  //переопределяем рендер
  render(placeToRender) {
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('cart__good')

      block.innerHTML = `${this.name}  (${this.price})  ${this.counter} шт. `
      placeToRender.appendChild(block)

      const cartButton = new Button('убрать')
      // () => {
      //   this._cartInstance.remove(new GoodItemInCart(this))
      // })
      // cartButton.classList.add('btn_cartgood')
      block.appendChild(cartButton.getTemplate())
    }
  }
}

// Все что нам остается - создать объекты класса List, Cart.Остальное они сделают сами
const CartInstance = new Cart()
const ListInstance = new List(CartInstance)
