function verifyPalindromo(test){
    if(!test){
        return "String inexistente";
    }
    return test.split("").reverse().join("") === test;
}

console.log(verifyPalindromo("OVO"))

//Solucao 2
function verifyPalindromo2(test){
    if(!test) return "String inexistente";

    for(i = 0; i < test.length / 2; i++){
        if(test[i] !== test[test.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verifyPalindromo2("OVO"))