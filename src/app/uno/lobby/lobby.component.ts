import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { Socket } from 'socket.io-client';
import { RoomSummary } from './lobby.types';
import { FormsModule } from '@angular/forms'; // Necesitamos FormsModule para ngModel
import { NgForOf, NgIf } from '@angular/common';
@Component({
  selector: 'app-lobby',
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})


export class LobbyComponent implements OnInit {

  constructor(private socketService: SocketService) {
    
  }
  private socket!: Socket;
  showCreateModal = false;
  newRoomName = '';
  rooms  : Array<RoomSummary> = [];
  




  ngOnInit(): void {
    this.socket = this.socketService.getSocket();
  
    this.socket.on('connect', () => {
      console.log('🎉 Conectado al servidor con ID:', this.socket.id);
  
      // 🧠 Recuperamos el nombre y userId del localStorage
      const nombre = localStorage.getItem('nombre');
      const userID = localStorage.getItem('userId');
  
      if (nombre && userID) {
        this.socket.emit('user_connected', { userID, nombre , game: 'uno', socketID: this.socket.id, room: null });

      } else {
        console.warn('⚠️ No hay nombre o userId guardado.');
      }


      this.socket.on('rooms_updated-uno', (rooms: Array<RoomSummary>) => {
        this.rooms = rooms;

        console.log('rooms', this.rooms);
      });

    });
  }

  // joinRoom(room: Room) {
  //   this.socket.emit('join', room.id);
  // }
  openCreateModal() {
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.newRoomName = '';
  }

  confirmCreateRoom() {
    if (this.newRoomName.trim()) {
      this.createRoom(this.newRoomName.trim());
      this.closeCreateModal();
    } else {
      console.warn('⚠️ Nombre de la sala vacío.');
    }
  }

  createRoom(name: string) {
    const userID = localStorage.getItem('userId');
    
    if (!userID) {
      console.error('No se encontró userId en localStorage');
      return;
    }
  
    this.socket.emit('create_room', { game: 'uno', name, userID });
  }

}
