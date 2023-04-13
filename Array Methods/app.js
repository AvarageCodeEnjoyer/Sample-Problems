const form = document.getElementById('form')
const arrayForm = document.getElementById('arrayForm')
const printArr = document.getElementById('printArr')
const findMean = document.getElementById('findMean')
const findMode = document.getElementById('findMode')
const findMedian = document.getElementById('findMedian')
const findRange = document.getElementById('findRange')
const findButtons = document.querySelectorAll('.findButtons')
const outputNum = document.getElementById('outputNum')
const currentArr = document.getElementById('currentArr')
const arrayContainer = document.getElementById('arrayContainer')

const randomArr = document.getElementById('randomArr')

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
    return `Mean: ${mean} <br> (The average)`
  }

  findMedian() {
    let sorted = this.arr.sort()
    let i = Math.floor(sorted.length / 2)
    if (sorted.length % 2 == 0) {
      return sorted[i - 1] + sorted[i]
    } else {
      return `Median: ${sorted[i]} <br> (The middle number)`
    }
  }

  findMode() {
    let n = 0
    let mode = 0
    this.arr.forEach(num => {
      let count = this.arr.filter(v => v == num)
      if (count.length > n) {
        n = count.length
        mode = num
      }
    })
    let result = n == 1 ? `No number appeared multiple times` : `The Mode: ${mode} Appeared ${n} Times`
    return `${result} <br> (The number that appeared the most)`
  }

  findRange() {
    let max = Math.max(...this.arr)
    let min = Math.min(...this.arr)
    let range = max - min
    return `Min: ${min}, Max: ${max}, Range: ${range} <br> (The difference between the biggest and smallest numbers)`
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
      <label for="${arrName}"><b>${arrName}</b> ${allArrays[arrName].arr.join(", ")} </label>
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
        outputNum.innerHTML = allArrays[arrName].findMean()
      })
      findMedian.addEventListener('click', e => {
        e.preventDefault()
        outputNum.innerHTML = allArrays[arrName].findMedian()
      })
      findMode.addEventListener('click', e => {
        e.preventDefault()
        outputNum.innerHTML = allArrays[arrName].findMode()
      })
      findRange.addEventListener('click', e => {
        e.preventDefault()
        outputNum.innerHTML = allArrays[arrName].findRange()
      })
    })
  })
}

/* ------------------- Generate random arrays for testing ------------------- */

randomArr.addEventListener('click', e => {
  e.preventDefault()
  let keys = []
  for (let i = 0; i < 10; i++) {
    let arrName = prompt("Name Your Array")
    if (arrName == null || arrName == "") {
      alert(`Array must have a name`)
    }
    if (keys.includes(arrName)) {
      alert(`You already have an array named "${arrName}"`)
    }
    allArrays[arrName] = new arrMethods(  generateRandomArray())
    keys = Object.keys(allArrays)
    console.log(keys)
    arrayContainer.innerHTML += `
      <div>
        <input type="radio" name="array" id="${arrName}"/>
        <label for="${arrName}"><b>${arrName}</b> ${allArrays[arrName].arr.join(", ")} </label>
      </div>`
    addClick()
  }
})


function generateRandomArray() {
  const length = Math.floor(Math.random() * 11) + 3;
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
}
