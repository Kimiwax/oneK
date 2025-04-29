export interface Room {
  id: string;
  name: string;
  players: Array<any>;
}

export interface RoomSummary {
  roomID: string;
  name: string;
  playersCount: number;
}