import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [{
      firstName:'Mateus',
      lastName:'Silva',
      age: 20
    },
    {
      firstName:'Dayelle',
      lastName:'Antonia',
      age: 23
    },
    {
      firstName:'Anna',
      lastName:'Silva',
      age: 11
    },
    {
      firstName:'Gabriel',
      lastName:'Silva',
      age: 12
    }]

    return of(peopleArray);
  }
}
