import { ListService } from './../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];
  constructor(private listService: ListService) { }
  
  getList(){
    return this.listService.getList().subscribe(pers =>{
      this.personagens = pers?.results;
    })
  }

  ngOnInit(): void {
    this.getList();
  }

}
