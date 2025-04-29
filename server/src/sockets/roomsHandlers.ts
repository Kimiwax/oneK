import { Server, Socket } from 'socket.io';
import { RoomToCreate } from './infoServer/types';
import { rooms } from './infoServer/rooms';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos
import { users } from './infoServer/users';
import { getRoomsSummaryForGame } from './utils/getRoomsSummaryForGame';


// Crear una sala
export function handleCreateRoom(io: Server, socket: Socket, roomToCreate: RoomToCreate) {
  const roomID = uuidv4();
  const { game, userID, name } = roomToCreate;

  if (!rooms[game]) { 
    console.error(`Juego no encontrado: ${game}`);
    return;
  }

  console.log('lista de usuarios', users);

  const user = users[userID];
  user.game = game;
  user.room = roomID;

  if (!rooms[game][roomID]) {
    rooms[game][roomID] = {
      name: name,
      players: [user],
    };
  } 
  

  socket.join(roomID);
  console.log(`Sala creada: ${roomID} para el juego ${game}`);

  io.to(roomID).emit('room_created', { roomID, roomName: rooms[game][roomID].name , players: rooms[game][roomID].players });


  

  const roomsSummary = getRoomsSummaryForGame(game, rooms);

  io.emit(`rooms_updated-${game}`, roomsSummary );


}

// Unirse a una sala existente
// export function handleJoinRoom(io: Server, socket: Socket, user: User, roomID: string) {
//   const { game } = user;

//   if (!rooms[game] || !rooms[game][roomID]) {
//     socket.emit('error_join', { message: 'La sala no existe' });
//     return;
//   }

//   rooms[game][roomID].players.push(user);
//   socket.join(roomID);
//   console.log(`${user.nombre} se unió a la sala ${roomID} en el juego ${game}`);

//   io.to(roomID).emit('player_joined', { player: user, roomID });
// }
