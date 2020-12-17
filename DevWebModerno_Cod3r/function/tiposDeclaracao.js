console.log(soma(3, 4))

// function declaration
function soma(x, y) { // posso usa-la antes mesmo dela ter sido declarada, ou seja antes no codigo
    return y + x
}

// function expression
const sub = function (x, y) { //so pode ser utilizada depois que foi declarada
    return x - y
}

console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) { // mesmo caso da segunda
    return x * y
}

console.log(mult(3, 4))