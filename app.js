const ul = document.querySelector("ul")
const input = document.querySelector("input")


input.addEventListener('keyup', function(e) {
  if(e.code == 'Enter' && e.target.value != "")  {
    const newLi = document.createElement('li')
    newLi.innerHTML = e.target.value
    ul.appendChild(newLi)
    e.target.value = ''
  }
})