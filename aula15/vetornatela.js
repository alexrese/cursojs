let valores = [1, 2, 4, 6, 7, 9];
// for(let pos = 0; valores.length < pos; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}