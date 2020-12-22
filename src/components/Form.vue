<template>
  <form :class="[$style.contact]" action="">
    <fieldset :class="[$style.fieldset]">
      <legend>Форма обратной связи</legend>
      <p :class="[$style.contact_line]">
        <label for="name">Имя</label>
        <input
          :class="[$style.contact_field]"
          placeholder=" Your name"
          name="username"
          id="name"
        />
      </p>
      <p :class="[$style.contact_line]">
        <label for="phone">Телефон </label
        ><input
          :class="[$style.contact_field]"
          placeholder=" +7(000)000-0000"
          name="phone"
          id="phone"
        />
      </p>
      <p :class="[$style.contact_line]">
        <label for="email">E-mail </label
        ><input
          :class="[$style.contact_field]"
          placeholder=" valid email"
          name="email"
          id="email"
        />
      </p>
    </fieldset>
    <Button @mySuperEvent="clickSubmit">Отправить</Button>
    <Button @mySuperEvent="clickReset">Сбросить</Button>
  </form>
</template>

<script>
import Button from "./Button.vue"

export default {
  components: {
    Button,
  },
  methods: {
    // const patterns = {
    //     username: /^[A-Za-z]+$/,
    //     phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    //     email: /^([a-z\d]+)([a-z\d\.-]+)@([a-z]+)\.([a-z]{2})$/,
    //   }

    validate(field, regex) {
      console.log(regex.test(field.value))
      if (regex.test(field.value)) {
        field.className = "valid"
      } else {
        field.className = "invalid"
      }
    },
    // разбираем полученный массив
    // inputs.forEach((input) => {
    //   input.addEventListener('keyup', (e) => {
    //     //e - event
    //     validate(e.target, patterns[e.target.attributes.name.value])
    //   })
    // })
  },
}
</script>

<style module>
.contact {
  width: 300px;
  background-color: #ffb6c1;
  padding: 15px;
}

fieldset {
  width: 95%;
}

.contact_line {
  display: block;
  float: right;
}

.contact_field,
.valid {
  outline: none;
  border-radius: 5px;
  margin: 10px 5px;
  height: 25px;
}

.invalid {
  background-color: #df2626;
  outline: none;
  border-radius: 5px;
  margin: 10px 5px;
  height: 25px;
}
</style>
