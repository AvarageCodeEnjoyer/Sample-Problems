const form = document.querySelector('form')
let sum

function sumArray(input) {
  let array = addToArray(input)
  for (let i = 0; i < array.length; i++){
    sum += array[i]
  }
  console.log(array)
  return sum
}

function addToArray(input){
  let result = []
  for (let i = 1; i <= input; i++){
    result.push(i)
  }
  return result
}

form.addEventListener('submit', e => {
  e.preventDefault()
  let input = document.getElementById('numInput').value
  sum = 0
  console.log(sumArray(input))
})



