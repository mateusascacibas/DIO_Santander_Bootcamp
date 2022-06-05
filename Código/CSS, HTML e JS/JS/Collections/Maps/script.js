function getAdmins(map){
    admin = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admin.push(key)
        }
    }
    return admin
}

const usuarios = new Map()
usuarios.set('Mateus', 'Admin')
usuarios.set('Dayelle', 'Dev')
usuarios.set('Anna','Admin')
console.log(getAdmins(usuarios))
