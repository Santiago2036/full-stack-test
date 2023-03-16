import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/models/persona';
import { Usuario } from 'src/app/services/models/usuario';
import { UsuarioService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{


  listUsers:any=[]

  constructor( private usuarioService: UsuarioService){}

  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    this.usuarioService.getUsers().subscribe(

      res => {console.log(res)
        this.listUsers = res},
      err => console.error(err)
      )
  }

  handleDelete(id : any)
  {
    if (confirm("Estas seguro de eliminar Usuario?")){
      this.usuarioService.deleteUser(id).subscribe(
        res => {
          console.log(res),
          this.getUsers()
        },
        err => console.log(err))
    }}
}
