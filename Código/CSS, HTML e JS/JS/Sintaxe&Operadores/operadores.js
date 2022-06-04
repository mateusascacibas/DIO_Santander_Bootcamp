function equalNumbers(a,b){
    var texto = "Os numeros " + a + " e " + b;
    var sum = a + b;
    if(a === b){
            texto += " são iguais.";
    }else{
        texto += " não são iguais.";
    }
    texto += "Sua soma é " + sum;
    if(sum > 10){
        texto += " que é maior que 10 e"
    }else{
        texto += " que é menor que 10 e"
    }
    if(sum > 20){
        texto += " maior que 20."
    }else{
        texto += " menor que 20."
    }
    console.log(texto)

}

equalNumbers(1,2)