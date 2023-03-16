import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/models/persona';
import { Usuario } from 'src/app/services/models/usuario';
import { Router,ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/services/person.service';
@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit{

  validator = this.activeRouter.snapshot.params;
  edit: boolean = false;
  usuario: any = {
    nombres: '',
    apellidos: '',
    email: '',
    numero_identificacion: 0 ,
    tipo_identificacion: '',
    fecha_creacion: new Date(Date.now()),
    pass: ''

  }

  constructor(private usuarioService: UsuarioService, private router:Router,private activeRouter:ActivatedRoute){}

  ngOnInit(){
     console.log(this.validator['id'])
     const params = this.activeRouter.snapshot.params;
     if (params['id']){
       this.usuarioService.getUser(params['id']).subscribe(
         res => {
           this.usuario = res,
           console.log(res)
           this.edit = true;
         },
         err => console.error(err)
       )
     }
  }

  handleCreate(){
  
    this.usuarioService.saveUser(this.usuario).subscribe(
      res=> {
        console.log(res),
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )
  }


  handleUpdate(){
    this.usuarioService.updateUser(this.usuario.idPersona,this.usuario).subscribe(
      res=>{
        console.log(res),
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )
  }

}
