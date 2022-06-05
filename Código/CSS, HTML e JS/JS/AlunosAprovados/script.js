const alunos =[ {
    nome: 'Mateus',
    nota: 8,
},
{
    nome: 'Day',
    nota: 6
},
{
    nome: 'Anna',
    nota: 5
},
{
    nome: 'Gabriel',
    nota: 4
}
]
function aprovados(array, media){
    let aprovados = []
   for (let index = 0; index < array.length; index++) {
        if(array[index].nota >= media){
            aprovados.push(array[index].nome)
        }
   }
   return aprovados
}

console.log(aprovados(alunos, 6))