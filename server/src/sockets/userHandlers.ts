import { Server, Socket } from 'socket.io';
import { User } from './infoServer/types';

import { rooms } from './infoServer/rooms';
import { getRoomsSummaryForGame } from './utils/getRoomsSummaryForGame';
import { users } from './infoServer/users';

export function handleUserConnected(io: Server, socket: Socket, data: User) {
  console.log('Usuario conectado:', data);
  users[data.userID] = data;

  const game = data.game;
  const roomsSummary = getRoomsSummaryForGame(game, rooms);

  socket.emit(`rooms_updated-${game}`, roomsSummary);
}

export function handleDisconnect(io: Server, socket: Socket ) {
  console.log('Cliente desconectado:', socket.id);
  

}
