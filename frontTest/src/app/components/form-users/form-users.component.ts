import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/models/persona';
import { Usuario } from 'src/app/services/models/usuario';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit{

  validator = this.activeRouter.snapshot.params;
  usuario: any = {
    nombres: '',
    apellidos: '',
    email: '',
    numero_identificacion: 0 ,
    tipo_identificacion: '',
    fecha_creacion: new Date(Date.now()),
    pass: ''

  }

  constructor(router:Router,private activeRouter:ActivatedRoute){}

  ngOnInit(){
    // console.log(this.validator['id'])

    // const params = this.activeRouter.snapshot.params;
    // if (params['id']){
    //   this.gameservice.getGame(params['id']).subscribe(
    //     res => {
    //       this.game = res,
    //       console.log(res)
    //       this.edit = true;
    //     },
    //     err => console.error(err)
    //   )
    // }
  }



  handleCreate(){
    console.log('crearemos')
    console.log(this.usuario)
  }

  handleDelete(){
    console.log('eliminaremos')
    console.log(this.usuario)
  }

  handleUpdate(){
    console.log('actualizaremos')
    console.log(this.usuario)
  }

}
