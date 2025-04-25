import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy,inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {AsyncPipe} from '@angular/common';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-home',
  imports: [NgFor,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  juegosDisponibles = ['Uno', 'Truco','Chinchon', 'Escoba']


  private readonly dialogs = inject(TuiDialogService);
 
  protected money = 1000;

  protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
      this.dialogs.open(content).subscribe();
  }

  protected withdraw(): void {
      this.money -= 100;
  }
}
