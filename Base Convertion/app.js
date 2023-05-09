const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')

function convertNum(e) {
  e.preventDefault()
  let value = +input.value.trim()
  // Stop code from running if input is zero
  if (value == '') {
    alert("Input needs to be bigger then 0")
    return
  }
  // Get value from select menu's
  let from = document.getElementById('select1')
  let to = document.getElementById('select2')
  // Stop the function if you try to convert a number to the same type
  if (+from.value === +to.value) {
    alert("Why would you want to do that?")
    return
  }
  // Make the number equal to the base value 
  let decimalValue = parseInt(value, +from.value)
  // Make result equal to the input value converted to the base value of the second select menu 
  let result = decimalValue.toString(+to.value)
  if (+to.value === 16) {
    result = decimalValue.toString(16).toUpperCase();
  }
  output.innerText = `${result.toUpperCase()}: Base ${+to.value}`
}