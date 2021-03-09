import RoomManager from "../../models/RoomManager";
import Room from "../../models/Room"
import RoomMember from "../../models/RoomMember";

class RoomController{
    public static createRoom(mem: RoomMember, size: number): Room{
        return new Room(mem, size);
    }


}


export = RoomController;
