
export type Games = 'uno' | 'truco' | 'chinchon' | 'escoba';

export interface User {
  userID: string;
  nombre: string;
  game:  Games;
  socketID: string;
  room: string;
}



export interface RoomInfo {
  name: string;
  players: Array<User>;
}


export interface Room {
  [roomID: string]: RoomInfo;
}


export type Rooms = {
  [game in Games]: Room;
}


export interface RoomToCreate {
  game: Games;
  name: string;
  userID : string;
}

export interface RoomSummary {
  roomID: string;
  name: string;
  playersCount: number;
}