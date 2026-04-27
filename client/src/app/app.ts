import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

private http = inject (HttpClient);

  protected readonly title = 'Dating App';

  ngOnInit(): void {
      this.http.get('https://localhost:1309/api/members').subscribe({
        next: response => console.log(response),
        error: error => console.log(error),
        complete: () => console.log('completed')
      })
  }
}
