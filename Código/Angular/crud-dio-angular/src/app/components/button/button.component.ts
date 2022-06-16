import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string = 'Clique';
  @Input() btnType: string = '';

  @Output() cliqueFilho = new EventEmitter();
  textFilho = 'clicou no filho'

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.cliqueFilho.emit(this.textFilho);
  }

}
