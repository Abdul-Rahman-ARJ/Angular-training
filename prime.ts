function prime() {
  let i:number;
  let p:any=new Array();
  for (i = 2; true; i++) {
    if(isPrime(i)){
        p.push(i);
        if(p.length === 10){
          return p
        }
    }
  }
  return 
}

function isPrime(num) {
  for (var i = 2; i < num; i++) 
    if (num % i === 0) 
        return false;
  return num > 1;
}