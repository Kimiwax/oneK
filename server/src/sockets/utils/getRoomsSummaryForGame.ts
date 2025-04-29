import { Games, Rooms, RoomSummary } from "../infoServer/types";

export function getRoomsSummaryForGame(game: Games, rooms: Rooms): RoomSummary[] {
  const summary: RoomSummary[] = [];

  const gameRooms = rooms[game];
  if (!gameRooms) {
    return summary;
  }

  for (const roomID in gameRooms) {
    const room = gameRooms[roomID];
    summary.push({
      roomID,
      name: room.name,
      playersCount: room.players.length,
    });
  }

  return summary;
}