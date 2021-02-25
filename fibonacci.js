function fib(n) {
    // são as únicas excessões da sequência
    if(n === 1) {
        return 1
    }
    if(n === 0) {
        return 0
    }

    return fib(n - 1) + fib(n - 2) // após input do número, ele é usado como guia na lista

    //input: fib(9)
    //output: 34
}