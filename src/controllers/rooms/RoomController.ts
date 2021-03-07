import RoomManager from "../../models/RoomManager";
import Room from "../../models/Room"
import RoomMember from "../../models/RoomMember";

class RoomController{
    public addRoom(room: Room){
        RoomManager.addRoom(room);
    }

    public deleteRoom(roomID: string){
        RoomManager.deleteRoom(roomID);
    }

    public createRoom(mem: RoomMember, size: number): Room{
        return new Room(mem, size);
    }

    
}


export = new RoomController();
