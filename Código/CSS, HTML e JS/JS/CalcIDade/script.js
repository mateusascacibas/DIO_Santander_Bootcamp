const p1 = {
    nome: 'Mateus',
    idade: 20
}

const p2 = {
    nome: 'Day',
    idade: 23
}

const p3 = {
    nome: 'Anna',
    idade: 11
}

function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calcularIdade.apply(p3, [5]));