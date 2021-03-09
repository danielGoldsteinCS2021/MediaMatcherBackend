// This class will hold all currently active rooms and manage them
import Room from "./Room";

class RoomManager{
    private static _allRooms: any = {}; // will be a key value store

    public static addRoom(room: Room): void{
        if (room.getID !in RoomManager._allRooms)
            RoomManager._allRooms[room.getID] = room;
        else
            console.log('ERROR ADDING ROOM, room with id already exists');
    }

    public static deleteRoom(id: string){
        if (id in RoomManager._allRooms) delete RoomManager._allRooms[id];
        else
            console.log('ERROR DELETING ROOM, room id does not exist');
    }

    static get allRooms(): any{
        return RoomManager._allRooms;
    }
}

export = RoomManager;
