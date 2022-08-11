const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const emailaddress = document.getElementById('emailaddress')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstname.value === '' || firstname.value == null) {
   messages.push('Name is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

form.addEventListener('submit', (e) => {
  let messages = []
  if (lastname.value === '' || lastname.value == null) {
    messages.push('Name is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

form.addEventListener('submit', (e) => {
  let messages = []
  if (emailaddress.value === '' || emailaddress.value == null) {
   messages.push('Name is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})