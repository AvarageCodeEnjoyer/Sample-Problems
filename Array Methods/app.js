const form = document.getElementById('form')
const arrayForm = document.getElementById('arrayForm')
const printArr = document.getElementById('printArr')
const findMean = document.getElementById('findMean')
const findMode = document.getElementById('findMode')
const findMedian = document.getElementById('findMedian')
const findButtons = document.querySelectorAll('.findButtons')
const outputNum = document.getElementById('outputNum')
const currentArr = document.getElementById('currentArr')
const arrayContainer = document.getElementById('arrayContainer')

let allArrays = {}
let placeholder = []
let input1, input2
class arrMethods {
  constructor(arr) {
    this.arr = arr
  }

  findMean() {
    let total = 0
    let i
    for (i = 0; i < this.arr.length; i++) total += parseInt(this.arr[i])
    let mean = total / i
    mean = Math.floor(mean)
    return mean
  }

  findMedian() {
    let sorted = this.arr.sort((a , b) => a - b)
    let i = Math.floor(sorted.length / 2)
    if (sorted.length % 2 == 0) {
      return sorted[i - 1] + sorted[i] / 2
    } else {
      return sorted[i]
    }
  }

  findMode() {
    let mode = 0
    let n = 0
    this.arr.forEach(num => {
      let count = this.arr.filter(v => v == num)
      if (count.length > n) {
        n = count.length
        mode = num
      }
    })
    return `${mode} Appeared ${n} Times`
  }

  findRange() {
    let max = Math.max(...this.arr)
    let min = Math.min(...this.arr)
    let range = max - min
    return `Min: ${min}, Max: ${max}, Range: ${range}`
  }
}

/* ------------------------ Functions for submitting ------------------------ */

function addNumberToArr(e) {
  e.preventDefault()
  let numInput = parseInt(document.getElementById("numInput").value)
  if (isNaN(numInput)) {
    alert("Input a number")
    return
  }
  placeholder.push(numInput)
  document.getElementById('numInput').value = ""
  currentArr.innerText = placeholder.join(', ')
}

function submitArray(e){
  e.preventDefault()
  let arrName = prompt("Name Your Array")
  allArrays[arrName] = new arrMethods(placeholder)
  placeholder = []
  currentArr.innerText = ""
  arrayContainer.innerHTML += `
    <div>
      <input type="radio" name="array" id="${arrName}"/>
      <label><b>${arrName}</b> ${allArrays[arrName].arr} </label>
    </div>`
  addClick()
}

function addClick() {
  document.querySelectorAll('[name="array"]').forEach(button => {
    button.addEventListener('change', e => {
      let arrName = e.target.id
      currentArr.innerHTML = `<b>Selected Array: </b> ${arrName} <br>${allArrays[arrName].arr.join(", ")}`
      findMean.addEventListener('click', e => {
        e.preventDefault()
        outputNum.innerText = allArrays[arrName].findMean()
      })
      findMedian.addEventListener('click', e => {
        outputNum.innerText = allArrays[arrName].findMedian()
      })
      findMode.addEventListener('click', e => {
        outputNum.innerText = allArrays[arrName].findMode()
      })
    })
  })
}