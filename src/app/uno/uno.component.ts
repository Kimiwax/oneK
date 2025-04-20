import { CommonModule, NgFor } from '@angular/common';
import { Component, ChangeDetectorRef  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface Jugador {
  id: number;
  nombre: string;
  puntaje: number;
  cartas: Array<any>;
}
@Component({
  selector: 'app-uno',
  imports: [RouterOutlet,RouterLink, RouterLinkActive, NgFor, CommonModule],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {

  nuevoJugador: any;
  barajaActiva: Array<any> = [];
  
//   cartasEspeciales: [
//     { valor: "+4", tipo: "accion", colores: ["rojo", "verde", "azul", "amarillo"] }, 
//     { valor: "cambioColor", tipo: "accion", colores: ["rojo", "verde", "azul", "amarillo"] },
// ]
carta = {
    color: [{nombre:"rojo", codColor: '#EB5353'},{nombre:"verde", codColor: '#36AE7C'},{nombre:"azul", codColor: '#187498'},{nombre:"amarillo", codColor: '#F9D923'}],
    cartas: [
      { valor: 0, tipo: "numero" },
      { valor: 1, tipo: "numero" },
      { valor: 2, tipo: "numero" }, 
      { valor: 3, tipo: "numero" }, 
      { valor: 4, tipo: "numero" }, 
      { valor: 5, tipo: "numero" }, 
      { valor: 6, tipo: "numero" }, 
      { valor: 7, tipo: "numero" },
      { valor: 8, tipo: "numero" }, 
      { valor: 9, tipo: "numero" },
      { valor: "+2", tipo: "accion" }, 
      { valor: "salta", tipo: "accion" },
      { valor: "reversa", tipo: "accion" },
      { valor: "+4", tipo: "accion"}, 
      { valor: "cambioColor", tipo: "accion"},
    ]
  };
constructor(private cdr: ChangeDetectorRef){

}

nombre = "Jugador 1";
nombre2 = "Jugador Franco";

mezclarCartasYRepartir () {
   this.nuevoJugador = {
    id: 1,
    nombre: 'Momo',
    puntaje: 0,
    cartas: [] 
  };

  console.log(this.nuevoJugador)

  while (this.nuevoJugador.cartas.length < 7) {
    const indiceAleatorioCartas = Math.floor(Math.random() * this.carta.cartas.length);
    const indiceAleatorioColor = Math.floor(Math.random() * this.carta.color.length);
    console.log(indiceAleatorioCartas)


    if(indiceAleatorioCartas == 13 || indiceAleatorioCartas == 14){
      this.nuevoJugador.cartas.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: {nombre:"especial", codColor: '#19282F'}
      });
  
    }
    else{
      this.nuevoJugador.cartas.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: this.carta.color[indiceAleatorioColor]
      });
  
    }

    console.log("cartas", this.nuevoJugador.cartas)
  }

  this.cdr.detectChanges();
}

agarrarCarta(){
  const indiceAleatorioCartas = Math.floor(Math.random() * this.carta.cartas.length);
    const indiceAleatorioColor = Math.floor(Math.random() * this.carta.color.length);
    console.log(indiceAleatorioCartas)


    if(indiceAleatorioCartas == 13 || indiceAleatorioCartas == 14){
      this.nuevoJugador.cartas.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: {nombre:"especial", codColor: '#19282F'}
      });

      this.barajaActiva.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: {nombre:"especial", codColor: '#19282F'}
      })
  
    }
    else{
      this.nuevoJugador.cartas.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: this.carta.color[indiceAleatorioColor]
      });

      this.barajaActiva.push({
        ...this.carta.cartas[indiceAleatorioCartas],
        color: this.carta.color[indiceAleatorioColor]
      })
  
    }

    console.log("cartas", this.nuevoJugador.cartas)
    console.log("cartasV", this.barajaActiva)
}

jugarCarta(){

}

saltarJugador(){

}

cambiarSentido(){

}

darCarta(cantidad:any){

}

crupierGeneral(){

}
  

}
