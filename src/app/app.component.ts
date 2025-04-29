import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuardarVarsService } from "../services/guardar-vars.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oneX';
  nombreUsuario: string = '';

  constructor(private guardarVar: GuardarVarsService) {
    this.guardarVar.nombre$.subscribe(n => this.nombreUsuario = n);
  }}
