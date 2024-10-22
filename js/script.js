const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

const menuBtn = document.getElementById('menu-btn')
const menuList = document.getElementById('menu')


linkForm.addEventListener('submit', formSubmit)

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault()

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
  } else if (!valueURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid url'
    input.classList.add('border-red')
  } else {
    errMsg.innerHTML = ''
    input.classList.remove('border-red')
    alert('Success')
  }
}

// Show Menu

function toggleBtn() {
  menuBtn.classList.toggle('open')
  menuList.classList.toggle('hidden')
  menuList.classList.toggle('flex')
}

menuBtn.addEventListener('click', toggleBtn)