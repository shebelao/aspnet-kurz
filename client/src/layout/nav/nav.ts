import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { inject, Injectable } from '@angular/core';
import { signal, Signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected readonly title ='Web App';
  protected accountService = inject(AccountService)
  protected creds: any={}
  private router = inject(Router)
  private toast = inject(ToastService)

  login(){
    this.accountService.login(this.creds).subscribe({
      next: results=>{
        console.log(results);
        this.router.navigateByUrl('/members');
        this.toast.success('logged in successfully')
        this.creds = {
          email: this.creds.email,
          password : ''
        };
      },
      error: error => {
        console.log(error)
        this.toast.error(error.error);
      }
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
