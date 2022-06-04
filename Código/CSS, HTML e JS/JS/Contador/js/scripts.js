var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment(){
    if(currentNumber >=10){
        alert("10 é o limite de incremento!")
    }else{
        if(currentNumber == -1){
            currentNumberWrapper.style.color = 'black'
        }
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
}


function decrement(){
    if(currentNumber == 0){
        alert("Está entrando nos numeros negativos.")
        currentNumberWrapper.style.color = 'red'
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}