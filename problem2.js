// problem 2
// mencari bilangan prima
// Bilangan harus lebih besar dari 1 --> 1 bukan bilangan prima
// Bilangan tersebut hanya dapat dibagi oleh angka 1 dan dirinya sendiri
// Angka 2 adalah satu-satunya bilangan prima dan bilangan genap

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function findFirstNPrimes(count) {
    const primes = [];
    let currentNumber = 2;
  
    while (primes.length < count) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  const n = 10;
  const firstNPrimes = findFirstNPrimes(n);
  console.log(firstNPrimes);