function verificarPrimo(n) {
    var i;
    var counter = 0;

    for(i = 1; i <= n; i++) {// o loop é feito para verificar se o número é divisível apenas por ele mesmo
        if(n % i === 0) {
            counter++
        }
    }
    if(counter == 2) {
        console.log(`${n} é primo`)
    } else {
        console.log(`${n} não é primo`)
    }
}