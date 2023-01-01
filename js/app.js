const passIcons = document.querySelectorAll('.pass-icon')

passIcons.forEach(passIcon => {
  passIcon.onclick = () => {
    const attr =  passIcon.getAttribute('src') 
    const passInput = passIcon.previousElementSibling
    if (attr == 'images/safe.svg') {
      passIcon.src = 'images/unsafe.svg'
      passInput.type = 'text'
    }
    if (attr == 'images/unsafe.svg') {
      passIcon.src = 'images/safe.svg'
      passInput.type = 'password'
    }
  } 
})