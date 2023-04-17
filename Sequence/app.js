const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');


function drawLines() {
  let input = prompt("What do you want n to be in 9n^2 + n ?")
  ctx.beginPath()
  ctx.moveTo(350, 350)
  for (let n = 0; n < input; n++) {
    console.log(`9 x ${n}^2 + ${n} = ${9 * n ** 2 + n}`)
    ctx.lineTo(n, n)
  } 
  ctx.stroke()
}

// drawLines()