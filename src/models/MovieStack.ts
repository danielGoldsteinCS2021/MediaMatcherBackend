/*
* This file will represent the object that holds the
* list of movies a group of users (a room) will have to choose from
* */
import Movie from './Movie'

class MovieStack{
    private _movieList: Movie[] = [];
    private readonly _roomID: string;

    constructor(roomID: string) {
        this.populateList(50);
        this._roomID = roomID;
    }

    public populateList(size: number): void{
        for (let i = 0; i<size; ++i){
            this._movieList.push(new Movie());
        }
    }

    get getMovieList(): Movie[] {
        return this._movieList;
    }

    get getRoomID(): string{
        return this._roomID;
    }

    get getMovieListAsJson(): {'Movie': Movie[]} {
        return {'Movie': this._movieList};
    }

    get getMovieListAsJsonString(): string{
        return JSON.stringify(this.getMovieListAsJson);
    }
}


export = MovieStack;
