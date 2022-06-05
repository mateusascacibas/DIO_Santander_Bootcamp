array = [1,2,3,4,5,6,7,8,9,10]
function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current
    })
}

arrayPrice = [5,10,20,30,15]

function calcSaldo(arr, saldo){
    const price = arr.reduce(function(prev,current){
        return prev + current
    })
    return saldo - price
}
console.log(somaNumeros(array))
console.log(calcSaldo(arrayPrice, 100))