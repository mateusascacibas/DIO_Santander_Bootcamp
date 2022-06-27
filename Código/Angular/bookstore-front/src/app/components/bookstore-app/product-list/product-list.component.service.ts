import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Book } from './model/Book';

@Injectable()
export class BookService{
    private url = 'http://localhost:3000/books';
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url);
    }
}