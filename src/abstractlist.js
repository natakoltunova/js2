//в этом классе будет функционал для любых списков
export default class AbstractList {
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
