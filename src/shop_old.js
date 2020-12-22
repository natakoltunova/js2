// import Cart from './cart.js'
import Form from './form.js'
import List from './list.js'

import './style.css'

// Все что нам остается - создать объекты класса List, Cart.Остальное они сделают сами
// const CartInstance = new Cart()
// const FormInstance = new Form()
const ListInstance = new List(CartInstance)
