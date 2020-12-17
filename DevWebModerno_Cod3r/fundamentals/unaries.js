let num1 = 1
let num2 = 2

num1++ // num1 = num1 + 1
console.log(num1)

--num1 // num1 = num1 - 1 //  tem prioridade em cima de num++
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)