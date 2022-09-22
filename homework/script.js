let name = prompt('Как вас зовут?')
let account = 7777
let money = 10000


if (name === 'Alex') {
  let password = prompt('Пароль?')
  account = account.toString()
    if (password === account) {
      let cashOut = prompt('Склько вы хотите обналичить?')
        if (cashOut <= money) {
            alert('Все отлично!')
            alert(`Обналичил ${cashOut} осталось ${money - cashOut}`)
        } else {
            alert('Недостаточно средств!')
        }
    } else {
        alert('Не правельный пароль, досвидули!')
    }
} else {
    alert('Пользователь не найден, досвидули!')
}



