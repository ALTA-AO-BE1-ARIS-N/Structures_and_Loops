// Problem 4
// Prime Number
// Dengan input 11,13,17,20,35
// menghasilkan output true,true,true,false,false

function primeNumber(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    // Bilangan prima selain 2 dan 3 adalah bilangan berbentuk 6n ± 1
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
console.log(primeNumber(11))
console.log(primeNumber(13))
console.log(primeNumber(17))
console.log(primeNumber(20))
console.log(primeNumber(35))

