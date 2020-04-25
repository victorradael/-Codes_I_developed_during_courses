// v e v -> v
// v e f -> f
// f e ? -> f

// v ou ? -> v
// f ou ? -> ?
// f ou f -> f
// f ou v -> v

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f
// !f -> v

function compra(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ou
    const comprarTv50 = trabalho1 && trabalho2 // e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2 // xor
    const manterSaudavel = !comprarSorvete // operador unario
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // comprarSorvete: comprarSorvete = comprarSorvete (ES6)
}

console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))