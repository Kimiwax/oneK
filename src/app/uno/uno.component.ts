import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uno',
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
cartasRojas = {
    color: "rojo",
    cartas: {
      numeros: [
        { valor: "0", tipo: "numero" },
        { valor: "1", tipo: "numero" }, { valor: "1", tipo: "numero" },
        { valor: "2", tipo: "numero" }, { valor: "2", tipo: "numero" },
        { valor: "3", tipo: "numero" }, { valor: "3", tipo: "numero" },
        { valor: "4", tipo: "numero" }, { valor: "4", tipo: "numero" },
        { valor: "5", tipo: "numero" }, { valor: "5", tipo: "numero" },
        { valor: "6", tipo: "numero" }, { valor: "6", tipo: "numero" },
        { valor: "7", tipo: "numero" }, { valor: "7", tipo: "numero" },
        { valor: "8", tipo: "numero" }, { valor: "8", tipo: "numero" },
        { valor: "9", tipo: "numero" }, { valor: "9", tipo: "numero" }
      ],
      acciones: [
        { valor: "+2", tipo: "accion" }, { valor: "+2", tipo: "accion" },
        { valor: "salta", tipo: "accion" }, { valor: "salta", tipo: "accion" },
        { valor: "reversa", tipo: "accion" }, { valor: "reversa", tipo: "accion" }
      ]
    }
  };
constructor(){

}


mezclarCartasYRepartir () {

}

crupierGeneral(){

}
  

}
