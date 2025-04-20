import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-truco',
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './truco.component.html',
  styleUrl: './truco.component.css'
})
export class TrucoComponent {

}
