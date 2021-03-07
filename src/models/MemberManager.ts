// This file will be a static class that keeps track of all the members using the application
import RoomMember from "./RoomMember";
class MemberManager {
    private static _allMembers: any = {};

    public static addMember(member: RoomMember): void{
        MemberManager._allMembers[member.memberID] = member;
    }

    public static deleteMember(id: string): void{
        if (id in MemberManager._allMembers) delete MemberManager._allMembers[id];
        else console.log('Member does not exist, ERROR DELETING');
    }

    get allMembers(): RoomMember[]{
        return MemberManager._allMembers;
    }
}

export = new MemberManager();
