import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Login = {
    email: '',
    password: '',
  };


  constructor(private loginservice: LoginService, private router: Router) { }



  ngOnInit() {

  }

  sendCred() {


    this.loginservice.sendCredentials(this.credentials).subscribe(
      (res: any) => {

        localStorage.setItem('Token', res.token);

        this.router.navigate(['/sales/fruveg']);

      },
      err => {

        console.log(err)
        window.alert('Valide sus credenciales e intente nuevamente')

      }

    )

  }




}
