array = [1,2,3,4,5,6,7,8,9,10]
function filtraPares(arr){
    return arr.filter((par) => par % 2 === 0)
}
console.log(filtraPares(array))