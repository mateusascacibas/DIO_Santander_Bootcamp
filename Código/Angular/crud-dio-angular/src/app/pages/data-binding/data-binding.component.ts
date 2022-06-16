import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Mateus Ascacibas'
  imageUrl = "https://picsum.photos/300/300"
  buttonText = "Clique Aqui"
  textRed = false
  bgColor= 'green'
  textInput='';
  number= 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text
  }

  clicou(value: any){
    console.log("Clicou em mim" + value);
    this.textRed = true;
  }

  clicouNoFilho(text: any){
      console.log(text)
  }

  incrementa(){
    this.number ++;
  }

  destroiComponente(){
    this.destroy = true;
  }

}
