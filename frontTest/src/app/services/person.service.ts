import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './models/persona';
import { Usuario } from './models/usuario';
import { UsuarioLogin } from './models/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://localhost:5286'
  private api = '/api/Usuario'

  constructor(private http: HttpClient) { }


  getUsers(){
    return (this.http.get(`${this.URL}${this.api}`));
  }

  getUser(id: string){
    return (this.http.get(`${this.URL}${this.api}/${id}`));
  }

  saveUser(user: Usuario){
    return(this.http.post(`${this.URL}${this.api}`, user));
  }

  updateUser(id:string, user: Usuario){
    return(this.http.put(`${this.URL}${this.api}/${id}`, user));
  }

  deleteUser(id:string){
    return(this.http.delete(`${this.URL}${this.api}/${id}`));
  }

  login(user : UsuarioLogin){
    return(this.http.post(`${this.URL}${this.api}/login`, user)); 
  }
}
