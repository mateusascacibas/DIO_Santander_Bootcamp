array = [2,3,4,5]
function comThis(mult, thisArg){
    return mult.map(function(item){
        return item * thisArg;
    }, thisArg);
}

console.log("Multi com This -> " + comThis(array, 2))
console.log("sem This -> "+ array.map((mult) => mult * 2))

