import RoomMember from "../../models/RoomMember";
import MemberManager from "../../models/MemberManager"

class MemberController {
    public static addMember(roomID: string): void {
        let newMember: RoomMember = new RoomMember();
        newMember.setRoomID(roomID);
        MemberManager.addMember(newMember);
    }
}

