import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  pessoas = [
    {
      firstName: "",
      lastName: "",
      age: 1
    }
  ]
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople(){
    return this.peopleService.getPeople().subscribe(people =>{
      this.pessoas = people;
    });
  }

}
