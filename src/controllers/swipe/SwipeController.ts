import MovieStack from "../../models/MovieStack";
import Movie from "../../models/Movie";
import RoomManager from "../../models/RoomManager";
import Room from "../../models/Room";


class SwipeController{
    private _roomID: string;
    private _MovieStack: MovieStack;
    private _newStackRequests: number;


    constructor(id: string) {
        this._roomID = id; // this way each room is linked to a swipe controller
        this._MovieStack = new MovieStack(this._roomID);
        this._newStackRequests = 0;
    }

    public swipeLeft(): void{
        console.log('fill out function later');
    }

    public swipeRight(movie: Movie): boolean {
        movie.addLikes();
        const room: Room = RoomManager.allRooms[this._roomID];
        return movie.likes == room.currentSize;
    }

    // when stack is empty, call this method
    public matchedMovies(): Movie[]{
        this._MovieStack.getMovieList.sort((a) => a.likes)
        return this._MovieStack.getMovieList;
    }

    // if enough users request a new stack let's give them one
    public getNewStack(): boolean{
        const room: Room = RoomManager.allRooms[this._roomID];
        if (this._newStackRequests == room.currentSize)
            return true;
        this._newStackRequests+=1;
        return false
    }
}
