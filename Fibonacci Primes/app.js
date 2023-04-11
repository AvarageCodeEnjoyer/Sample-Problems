let loopTo = parseInt(prompt("How high should we go?"))

let fibonacci
let primes = [2, 3]

function findFibonacci() {
  fibonacci = ["0", "1"]
  let fib1 = "0"
  let fib2 = "1"
  console.log(fib1)
  console.log(fib2)
  for (let i = 2; i < loopTo; i++) {
    let acc = BigInt(fib1) + BigInt(fib2)
    console.log(acc.toString())
    fibonacci.push(acc.toString())
    fib1 = fib2
    fib2 = acc.toString()
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      // console.log(n % i == 0 ? i : i + 2)
      return false;
    }
  }
  primes.push(n)
  return true;
}

function findBoth() {
  // findFibonacci()
  loopPrimes()
  let both = fibonacci.filter(value => primes.includes(value))
  console.log(both)
}

function loopPrimes() {
  for (let i = 0; i < loopTo; i++) {
    isPrime(i)
  }
}
console.time('test')
loopPrimes()
// isPrime(89)
console.log(primes)
console.timeEnd('test')