// problem 3
// mencari bilangan prima segi empat

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    
    return true;
  }
  
  function generatePrimes(height, width, start) {
    const primes = [];
    let sumPrimes = 0;
  
    for (let i = start; primes.length < height * width; i++) {
      if (isPrime(i)) {
        primes.push(i);
        sumPrimes += i;
      }
    }
  
    return { primes, sumPrimes };
  }
  
  function printSquare(height, width, primes) {
    let output = '';
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        output += primes[i * width + j] + ' ';
      }
      output += '\n';
    }
    console.log(output);
  }
  
  const height = 3;{
  const width = 2;
  const start = 17;
  const { primes, sumPrimes } = generatePrimes(height, width, start);
  
  console.log(`Bilangan prima ${height} x ${width} dimulai dari angka ${start}:`);
  printSquare(height, width, primes);

  console.log(sumPrimes);}

  const height2 = 2;{
  const width = 5;
  const start = 2;
  const { primes, sumPrimes } = generatePrimes(height2, width, start);
  
  console.log(`Bilangan prima ${height2} x ${width} dimulai dari angka ${start}:`);
  printSquare(height2, width, primes);
  
  console.log(sumPrimes);}

  