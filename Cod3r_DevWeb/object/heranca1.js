const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // para ver o pai de ferrari
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // esse é o pai master, não tem pai acima dele

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)