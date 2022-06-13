import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/0184971e-1081-4dc5-a64d-1b92d34aeff7';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  //Retorna a lista de usuarios READ
  getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.apiUrl);
  }

  //Salva Usuario no banco
  postUser(user: User):Observable<User>{
    return this.http.post<User>(this.apiUrl, user, this.httpOptions);
  }

  //Exclui o usuario do banco
  deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  updateUser(id: string, user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  getUser(id: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/id/${id}`);
  }

}
