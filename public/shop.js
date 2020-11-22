//cписок товаров
class List {
  //массив товаров, по умолч - пустой
  items = []

  constructor() {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    let goods = this.fetchGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map((cur) => {
      return new GoodItem(cur)
    })

    // поштучно добавляем объекты в наш список
    // ссылка на статью про spread оператор ниже
    this.items.push(...goods)

    // запускаем рендер
    this.render()
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/
  fetchGoods() {
    return [
      { name: 'Shirt', price: 1100 },
      { name: 'T-shirt', price: 400 },
      { name: 'Jacket', price: 800 },
      { name: 'Pants', price: 1100 },
      { name: 'Skirt', price: 700 },
      { name: 'Pullover', price: 1000 },
      { name: 'Shorts', price: 500 },
      { name: 'Underwear', price: 300 },
      { name: 'Socks', price: 150 },
      { name: 'Shoes', price: 1500 },
    ]
  }

  //метод, выводящий товары, раблтает, когда массив items заполнен товарами класса GoodItem
  render() {
    // Проходимся по каждому такому объекту из массива и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this.items.forEach((good) => {
      good.render() //у каждого товара вызываем его метод render
    })
  }
}

// класс карточки товара
class GoodItem {
  name = ''
  price = 0

  // в аргументах применена деструктуризация
  constructor({ name, price }) {
    this.name = name
    this.price = price
  }

  render() {
    // находим место куда рендерить (div с кл goods-list)
    const placeToRender = document.querySelector('.goods-list')
    //если нашли
    if (placeToRender) {
      // то создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')

      const button = document.createElement('button')
      // button.setAttribute('class', 'btn')
      button.style.width = '50px'
      button.style.height = '20px'
      button.innerHTML = 'купить'

      block.innerHTML = `Товар: ${this.name}, стоимость ${this.price}  `
      block.appendChild(button)

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
  // button.onclick = function() {

  // }
}

// Все что нам остается - создать объект класса List.Остальное он сделает сам.
const ListInstance = new List()
