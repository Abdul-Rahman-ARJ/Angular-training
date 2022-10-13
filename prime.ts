function prime(a:number) {
  let i:number;
  let p:any=new Array();
  for (i = 2; i <= a; i++) {
    if(isPrime(i)){
        p.push(i);
    }
  }
  return p
}

function isPrime(num) {
  for (var i = 2; i < num; i++) 
    if (num % i === 0) 
        return false;
  return num > 1;
}