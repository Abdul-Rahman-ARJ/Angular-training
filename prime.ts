function prime() {
  let a = 10;
  let i=0;
  let p =new  Array();
  for (i = 2; i <= a; i++) {
    if(isPrime(i)){
        p.push(i);
    }
  }
  alert("Prime Numbers From 2 to 10 are : "+p) 
}

function isPrime(num) {
  for (var i = 2; i < num; i++) 
    if (num % i === 0) 
        return false;
  return num > 1;
}