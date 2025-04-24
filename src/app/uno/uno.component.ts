import { CommonModule, NgFor } from '@angular/common';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { Socket } from 'socket.io-client';
interface Jugador {
  id: number;
  nombre: string;
  puntaje: number;
  cartas: Array<any>;
}

@Component({
  selector: 'app-uno',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, CommonModule],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css',
})
export class UnoComponent implements OnInit  {

 
  constructor(
    private cdr: ChangeDetectorRef,
    private socketService: SocketService){
    this.mezclarCartasYRepartir();

  }
  private socket!: Socket;



  ngOnInit(): void {
    this.socket = this.socketService.getSocket();

    // ✅ Solo para verificar que se conectó:
    this.socket.on('connect', () => {
      console.log('🎉 Conectado al servidor con ID:', this.socket.id);
    });
  }




  //// ACA VAN LAS VARIABLES GLOBALES

  nuevoJugador: any;
  barajaActiva: Array<any> = [];
  bComenzoJuego: boolean = false;

  carta = {
    color: [
      { nombre: 'rojo', codColor: '#EB5353' },
      { nombre: 'verde', codColor: '#36AE7C' },
      { nombre: 'azul', codColor: '#187498' },
      { nombre: 'amarillo', codColor: '#F9D923' },
    ],
    cartas: [
      { valor: 0, tipo: 'numero' },
      { valor: 1, tipo: 'numero' },
      { valor: 2, tipo: 'numero' },
      { valor: 3, tipo: 'numero' },
      { valor: 4, tipo: 'numero' },
      { valor: 5, tipo: 'numero' },
      { valor: 6, tipo: 'numero' },
      { valor: 7, tipo: 'numero' },
      { valor: 8, tipo: 'numero' },
      { valor: 9, tipo: 'numero' },
      { valor: '+2', tipo: 'accion' },
      { valor: 'salta', tipo: 'accion' },
      { valor: 'reversa', tipo: 'accion' },
      { valor: '+4', tipo: 'accion' },
      { valor: 'cambioColor', tipo: 'accion' },
    ],
  };


  
//// ACA VAN LOS METODOS

  private obtenerCartaAleatoria(): any {
    const indiceAleatorioCartas = Math.floor(Math.random() * this.carta.cartas.length);
    const indiceAleatorioColor = Math.floor(Math.random() * this.carta.color.length);

    const esEspecial = indiceAleatorioCartas === 13 || indiceAleatorioCartas === 14;
    return {
      ...this.carta.cartas[indiceAleatorioCartas],
      color: esEspecial ? { nombre: 'especial', codColor: '#19282F' } : this.carta.color[indiceAleatorioColor],
    };
  }

  mezclarCartasYRepartir() {
    this.nuevoJugador = { id: 1, nombre: 'Momo', puntaje: 0, cartas: [] };

    while (this.nuevoJugador.cartas.length < 7) {
      this.nuevoJugador.cartas.push(this.obtenerCartaAleatoria());
    }

    this.barajaActiva.push(this.obtenerCartaAleatoria());
    this.bComenzoJuego = true;
  }

  agarrarCarta() {
    const nuevaCarta = this.obtenerCartaAleatoria();
    this.nuevoJugador.cartas.push(nuevaCarta);
    // this.barajaActiva.push(nuevaCarta);

    console.log('cartas', this.nuevoJugador.cartas);
    console.log('cartasV', this.barajaActiva);
  }

  tirarCarta() {
    console.log("Click tirar carta");



    
    }
}