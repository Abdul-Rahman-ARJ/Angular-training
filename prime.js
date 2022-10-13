function prime(a) {
    var i;
    var p = new Array();
    for (i = 2; i <= a; i++) {
        if (isPrime(i)) {
            p.push(i);
        }
    }
    return p;
}
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
