import { Component, OnInit, inject } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { RouterOutlet,Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Nav, RouterOutlet]
})
export class App {
  protected router = inject(Router);

}
