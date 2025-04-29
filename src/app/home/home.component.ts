import { NgFor } from '@angular/common';
import { Component, ChangeDetectionStrategy,inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {AsyncPipe} from '@angular/common';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButton, TuiDialogService, TuiTextfield,tuiDialog} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import { ReactiveFormsModule } from '@angular/forms';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
 
import { DialogUserComponent } from '../components/dialog-user/dialog-user.component';
@Component({
  selector: 'app-home',
  imports: [NgFor,RouterOutlet,RouterLink, RouterLinkActive, ReactiveFormsModule, TuiTextfield, TuiInputModule, TuiTextfieldControllerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly dialogs = inject(TuiDialogService);

  juegosDisponibles = [{ name: 'Uno', path: "Uno/lobby" }, { name: 'Truco', path: "Truco" }, { name: 'Chinchon', path: "Chinchon" }, { name: 'Escoba', path: "Escoba" }];


  constructor(){
    this.showDialog();
  }

  private readonly dialog = tuiDialog(DialogUserComponent, {
    dismissible: true,
    label: 'Introduce tu Nombre',
});

protected showDialog(): void {
    this.dialog('data').subscribe({
        next: (data) => {
            console.info(`Dialog emitted data = ${data}`);
        },
        complete: () => {
            console.info('Dialog closed');
        },
    });
}
}
