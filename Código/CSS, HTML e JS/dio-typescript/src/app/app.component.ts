import { Admin } from './interface/admin';
import { Usuario } from './interface/usuario';
import { Canino } from './interface/canino';
import { Felinos } from './interface/felinos';
import { Animal } from './interface/animal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  ngOnInit(): void {
   console.log('TypeScript');
   this.soma(5,5);
   const input = document.getElementById('input') as HTMLInputElement;
   input.addEventListener('input', (event)=>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
    
    //console.log(event.currentTarget)
   })
   console.log(this.adicionaApendiceALista(['a','b','c'], 'a'))
  }

  meuCachorro = {
    nome: 'Lua',
    idade: 1,
    // parqueFavorito: 'Ibirapuera'
  }
  redirecione(usuario: Usuario | Admin){
    if(usuario.cargo){
      //redirecionar para area de ADM
    }else{
       //Area de USU
    }
    // if('cargo' in usuario){
    //   //redirecionar para area de ADM
    // }else{
    //   //Area de USU
    // }

  }
   //Generic Types
  adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map((item: any) => item + valor);
  }

  soma(a: number, b: number){
    return a + b;
  }

   animal: Animal= {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: true

  }


  felino: Felinos = {
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false

  }
  title = 'dio-typescript';
}
