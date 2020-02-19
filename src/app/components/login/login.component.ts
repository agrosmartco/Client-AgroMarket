import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from "../../models/user";



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

  user:User = {
    firstName:'',
    lastname:'',
    email:'',
    password:''
  }

  constructor(private loginservice: LoginService, private router: Router,private modalService: NgbModal) { }



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

  createUsers(modal) {

    console.log(this.user);
    

    this.loginservice.createUser(this.user).subscribe(
      (res: any) => {

        this.closeModal(modal);
        window.alert('Usuario creado con exito')

      },
      err => {

        console.error(err)

      }
    )

  }

  
  showModal( modal) {

 
    this.modalService.open(modal);

  }

  closeModal(modal){

    this.modalService.dismissAll(modal);
  }



}
