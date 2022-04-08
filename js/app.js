const body = document.querySelector("body");
const toggleLight = document.getElementById('buttonLight')
const toggleDark = document.getElementById('buttonDark')

const form = document.querySelector('.main__form')
const email = document.getElementById('email');
const labelError = document.querySelector('.label__error')
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

email.value = ''

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailRegex.test(email.value)) {
    email.value = ""
    email.style.border = '1px solid var(--pale-blue)'
    labelError.classList.add('d-none')
  } else {
    email.style.border = 'none'
    email.style.border = '2px solid var(--light-red)'
    labelError.classList.remove('d-none')
  }
})


toggleLight.addEventListener("click", () => {
  document.documentElement.style.colorScheme = 'light'
  if (document.documentElement.style.colorScheme = 'light') {
    body.classList.add('light__mode');
    body.classList.remove('dark__mode');
  }
  toggleDark.classList.toggle('d-none')
})

toggleDark.addEventListener("click", () => {
  document.documentElement.style.colorScheme = 'dark'
  if (document.documentElement.style.colorScheme = 'dark') {
    body.classList.add('dark__mode');
    body.classList.remove('light__mode');
  }
  toggleDark.classList.toggle('d-none')
})