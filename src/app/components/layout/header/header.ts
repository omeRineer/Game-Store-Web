import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthStore } from '../../../stores/global/auth.store';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private authStore:AuthStore){}

  get isAuth(){
    return this.authStore.isAuth()
  }

  onLogout(){
    this.authStore.logout();
  }
}
