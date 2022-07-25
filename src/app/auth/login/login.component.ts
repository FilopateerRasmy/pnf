import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import {MessageService} from 'primeng/api';
import { ILogin } from 'src/app/shared/models/ilogin';
import { BehaviorSubject, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  msgs:any[]= [];
  loading = new BehaviorSubject(false)
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })
  constructor(private authService: AuthService, private router: Router, private messageService:MessageService) { }

  ngOnInit(): void {
  }


  submit(){

   this.authService.login(this.email.value, this.password.value).pipe(
    tap(()=> this.loading.next(true)),
    finalize(()=> this.loading.next(false))
   ).subscribe({
      next: res => {

        this.messageService.add({severity:'success', summary:'Login Status', detail:"You Successfully Logged In"});
         this.authService.saveUserToLocalStorage((res.data as ILogin));
        setTimeout(()=>this.router.navigate(['/main']), 1000)
      },
      error: err => {
        console.log(err)
        this.messageService.add({severity:'error', summary:'An Error Ocurred', detail:"Invalid Credentials"});
      }
    })
  }
}
