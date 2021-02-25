function verificarPrimo(n) {
    var i;
    var primo = true

    for(i = 2; i < n; i++) {// o loop é feito para verificar se o número é divisível apenas por ele mesmo
        if(n % i === 0) {
            primo = false
        }
    }
    if(primo) {
        console.log(`${n} é primo`)
    } else {
        console.log(`${n} não é primo`)
    }
}