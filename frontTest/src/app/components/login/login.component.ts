import { Component } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: any = {
    email: '',
    pass: ''
  }
  constructor(private usuarioService: UsuarioService, private router:Router){}

  getLogin()
  {
    this.usuarioService.login(this.usuario).subscribe(
      res=> {
        if (res== true){
          alert("successful login")
          this.router.navigate(['/'])
        }
        else{
          alert("Invalid username or password, please try again!")
        }


      },
      err => console.error(err)
    )}
}
