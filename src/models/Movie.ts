import {json} from "express";

class Movie{
    private _object = {'Title': '', 'Poster': '', 'imdbID': '', 'Year': ''};
    private static _keywords = ['hero', 'marvel', 'movie', 'house', 'snow', 'family', 'fun', 'love', 'monsters', 'store',
        'big', 'world', 'tag', 'school', 'happy', 'huge', 'baby']

    public addKeyword(keyword: string){
        Movie._keywords.push(keyword);
    }

    constructor() {
        this.getMovie().then(r => console.log('Promise Complete'));
    }

    // getters
    get getTitle(): string{
        return this._object['Title'];
    }

    get getPoster(): string{
        return this._object['Poster'];
    }

    get getId(): string{
        return this._object['imdbID'];
    }

    get getYear(): string{
        return this._object['Year'];
    }

    get getObject(): any{
        return this._object;
    }
    // ---------

    // function makes a get request to the api to get a movie
    private async getMovie() {
        const keyword: string = Movie.chooseKeyword();
        const url = 'http://www.omdbapi.com/?apikey=826c12c6&type=movie&s=' + keyword;
        const axios = require('axios');
        let movieObj = await axios.get(url).then((res: any) => res.data).catch((err: any) => console.log(err));
        let movieList = movieObj["Search"];
        this._object = movieList[Movie.getRandomIndex(movieList.length)];
    }

    private static chooseKeyword(): string{
        return Movie._keywords[this.getRandomIndex(Movie._keywords.length)];
    }

    private static getRandomIndex(arrayLen: number): number{
        return Math.floor(Math.random() * arrayLen);
    }

}

export = Movie;
