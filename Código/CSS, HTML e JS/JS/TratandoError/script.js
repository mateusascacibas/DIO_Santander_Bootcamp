function checkTry(arr, num){
    try{
        if(!arr && !num){
            throw new ReferenceError("Envie os parametros.");
       }
       if(typeof arr !== 'object'){
           throw new TypeError("Array precisa ser do tipo Object.");
       }
       if(typeof num !== 'number'){
           throw new TypeError("Numero precisa ser do tipo Number.");
       }
       if(arr.length != num){
           throw new RangeError('Tamanho invalido');
       }

       return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(checkTry([1,2,3],3));