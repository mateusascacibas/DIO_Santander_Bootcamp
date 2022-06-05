function subsPares(array){
    if(array.length === 0){
        return -1;
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0){
            array[index] = 0
        }
        
    }
    return array
}

console.log(subsPares([2,3,4,5,6,7,8]))