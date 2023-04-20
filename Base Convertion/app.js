const form = document.getElementById('form')

const input = document.getElementById('input')
const submit = document.getElementById('submit')

function convertNum(e) {
  e.preventDefault()
  let value = +input.value.trim()
  if (value == 0) {
    alert("Input needs to be bigger then 0")
    return
  }
  // Get value from select menu's
  let from = document.getElementById('select1')
  let to = document.getElementById('select2')
  
  if (+from.value === +to.value) {
    alert("Why would you want to do that?")
    return
  }

  // make the 
  let decimalValue = parseInt(value, +from.value)
  let result = decimalValue.toString(+to.value)
  output.innerText = `${result}: Base ${+to.value}`
}