let num = [5,3,4,5,3,91]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor temm ${num.length} posições `)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos= num.indexOf(8)
if ( pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
