function prime() {
    var a = 100;
    var i;
    var p = new Array();
    for (i = 2; true; i++) {
        if (isPrime(i)) {
            p.push(i);
            if (p.length === 10) {
                return p;
            }
        }
    }
    return;
}
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
