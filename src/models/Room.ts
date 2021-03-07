/* This file will define a room
*  class which will be a list of
*  user objects which represent which
*  users are connected to each room
* */
import RoomMember from './RoomMember'
import RoomManager from './RoomManager'
import MovieStack from "./MovieStack";

class Room{
    private _members: any = {}; // will be a hashmap of users
    private _roomID: string;
    private _roomMovies: MovieStack;
    private _limit: number; // max amount of members
    private _count: number; // current count of members

    constructor(member: RoomMember, size: number) {
        this._limit = size;
        this._count = 1;
        this._roomID = this.createRoom(member);
        this._roomMovies = new MovieStack(this._roomID);
        RoomManager.addRoom(this);
    }

    private createRoom(m: RoomMember): string{
        this._members[m.memberID] = m;
        let id: string = Room.generateRoomID();
        while (id in RoomManager.allRooms) id = Room.generateRoomID();
        return id;
    }

    public joinRoom(m: RoomMember): number{
        if (this._count < this._limit) {
            this._members[m.memberID] = m;
            this._count += 1;
            return 0;  // success
        }
        console.log('MAX SIZE - CAN NOT JOIN ROOM')
        return -1 // not success
    }

    public leaveRoom(m: RoomMember): number{
        if (m.memberID in this._members){
            delete this._members[m.memberID];
            this._count -= 1;
        }
        console.log('member not in room')
        return -1; // not success
    }

    // roomID wil be 5 characters long, unlike a memberID which is 10 (but it's not letters, only 0-9)
    private static generateRoomID(): string{
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let id: string = ''
        for (let i = 0; i<5; ++i){
            id += letters[Math.floor(Math.random()*letters.length)];
        }
        return id;
    }

    get members(): RoomMember[]{
        return this._members['Users'];
    }

    get getID(): string{
        return this._roomID;
    }

    get limit(): Number{
        return this._limit;
    }
}
export = Room;
