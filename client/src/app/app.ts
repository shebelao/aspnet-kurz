import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Nav, Home]
})
export class App implements OnInit {
  protected accountService = inject(AccountService)
  private http = inject (HttpClient);
  protected readonly title = 'Web App';
  protected members = signal<User[]>([])

  async ngOnInit(){
     this.members.set(await this.getMembers());
     this.setCurrentuser();
  }

setCurrentuser(){
  const userString = localStorage.getItem('user')
  if(!userString) return;
  const user = JSON.parse(userString)
  this.accountService.currentUser.set(user) 
}

  async getMembers(){
    try{
      return lastValueFrom(this.http.get<User[]>('https://localhost:1309/api/members'))
    }
    catch(error){
      console.log(error);
      throw error;
    }
  }
}
