import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { inject, Injectable } from '@angular/core';
import { signal, Signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected readonly title ='Web App';
  protected accountService = inject(AccountService)
  protected creds: any={}

  login(){
    this.accountService.login(this.creds).subscribe({
      next: results=>{
        console.log(results);

        this.creds = {
          email: this.creds.email,
          password : ''
        };
      },
      error: erroe => alert(erroe.message)
    })
  }

  logout(){
    this.accountService.logout();
  }

}
