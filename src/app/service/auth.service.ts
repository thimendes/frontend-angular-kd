import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';
import { UserLogin } from 'src/model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient 
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://knowledgedomain.herokuapp.com/api/v1/usuario/login', userLogin)

  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://knowledgedomain.herokuapp.com/api/v1/usuario/novo', user)
    
  }
}
