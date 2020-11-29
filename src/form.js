export default class Form {
  constructor() {
    this.render()
  }

  render() {
    const placeToRender = document.querySelector('footer')
    if (placeToRender) {
      placeToRender.innerHTML = `
        <form class="contact" action="">
          <fieldset>
            <legend>Форма обратной связи</legend>
            <p class="contact_line"><label for="name">Имя <input class="contact_field" placeholder=" Your name" name="username" id="name"></p>
            <p class="contact_line"><label for="phone">Телефон </label><input class="contact_field" placeholder=" +7(000)000-0000" name="phone" id="phone"></p>
            <p class="contact_line"><label for="email">E-mail </label><input class="contact_field" placeholder=" valid email" name="email" id="email"></p>
          </fieldset>
        <button type="submit">Отправить</button>
        <button type="reset">Сбросить</button>
      </form>
        `
      //собираем коллекцию инпутов в массив
      const inputs = document.querySelectorAll('input')

      const patterns = {
        username: /^[A-Za-z]+$/,
        phone: /^\+7{1}\(\d{3}\)\d]{3}-\d{4}$/,
        email: /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2})$/,
      }

      function validate(field, regex) {
        console.log(regex.test(field.value))
        if (regex.test(field.value)) {
          field.className = 'valid'
        } else {
          field.className = 'invalid'
        }
      }
      // разбираем полученный массив
      inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
          //e - event
          validate(e.target, patterns[e.target.attributes.name.value])
        })
      })
    }
  }
}

const FormInstance = new Form()
