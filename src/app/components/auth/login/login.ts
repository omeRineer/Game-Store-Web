import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../../models/auth/loginRequest';
import { AuthService } from '../../../services/rest/auth-service';
import { LocalStorageService } from '@coreui/angular';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../../../models/common/enums/localStorageKeys';
import { AuthStore } from '../../../stores/global/auth.store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginRequest: LoginRequest = new LoginRequest()
  loginForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(private authService:AuthService, 
              private authStore:AuthStore,
              private router:Router) {
    
  }

  onLogin() {
    
    if(!this.loginForm.valid)
      console.log("Form Hatalı")

    Object.assign(this.loginRequest, this.loginForm.value)

    this.authService.login(this.loginRequest).subscribe(res=>{
      if(res.success){
        this.authStore.login(res.data.token)
        this.router.navigate([""])
      }
    })
  }
}
