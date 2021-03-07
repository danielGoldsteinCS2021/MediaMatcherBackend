// This class will be for creating a member object to represent the members of rooms
import MemberManager from './MemberManager'
class RoomMember{
    private readonly _memberID: string;
    private _roomID: string | undefined;
    constructor() {
        let memId: string = RoomMember.generateMemberID();
        while (memId in MemberManager.allMembers){
            memId = RoomMember.generateMemberID();
        }
        this._memberID = RoomMember.generateMemberID();
    }

    public setRoomID(id: string){
        this._roomID = id;
    }

    public leftRoom(){
        this._roomID = undefined;
    }

    get memberID(): string{
        return this._memberID;
    }

    // member id is a unqiue 10 digit number
    private static generateMemberID(): string{
        let id: string = '';
        for (let i = 0; i < 10; ++i){
            id += Math.floor(Math.random()*10);
        }
        console.log('RoomMember ID '+id);
        return id;
    }
}

export = RoomMember;
