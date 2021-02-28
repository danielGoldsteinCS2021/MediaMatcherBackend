/* This file will define a room
*  class which will be a list of
*  user objects which represent which
*  users are connected to each room
* */
class Room{
    public _members: object = {}; // will be a hashmap of users

    constructor() {
        console.log('constructor ran')
    }
}
export = new Room();
