import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';
//import { clearInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cont: number = 0;
  nome: string = "Mateus Ascacibas da Silva";
  text: string = '';
  pessoas = [
    {
      firstName: "",
      lastName: "",
      age: 1
    }
  ]

  private getPeople(){
    return this.peopleService.getPeople().subscribe(people =>{
      this.pessoas = people;
    });
  }
  constructor(private peopleService: PeopleService) { }
  ngOnInit(): void {
    this.getPeople();
    let interval = setInterval(() => {
      this.cont++;
      if (this.cont === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome: string) {
    this.nome = nome;
  }


  title = 'ambiente-angular';
}


