import {json} from "express";

class Movie{
    private _title: string = '';
    private _year: string = '';
    private _poster: string = '';
    private _id: string = '';
    private _object = {};
    private static _keywords = ['hero', 'marvel', 'movie', 'house', 'snow', 'family', 'fun', 'love', 'monsters', 'store',
        'big', 'world', 'tag', 'school', 'happy', 'huge', 'baby']

    public addKeyword(keyword: string){
        Movie._keywords.push(keyword);
    }

    constructor() {
        this.getMovie().then(r => console.log('promise complete'));
    }

    // getters
    get getTitle(): string{
        return this._title;
    }

    get getPoster(): string{
        return this._poster;
    }

    get getId(): string{
        return this._id;
    }

    get getYear(): string{
        return this._year;
    }

    get getObject(): any{
        return this._object;
    }
    // ---------

    // test this request
    private async getMovie() {
        const keyword: string = Movie.chooseKeyword();
        const url = 'http://www.omdbapi.com/?apikey=826c12c6&type=movie&s=' + keyword;
        const axios = require('axios');
        let movieObj = await axios.get(url).then((res: any) => res.data).catch((err: any) => console.log(err));
        let movieList = movieObj["Search"];
        const movieJson = movieList[Movie.getRandomIndex(movieList.length)];
        this._title = movieJson["Title"];
        this._poster = movieJson["Poster"];
        this._id = movieJson["imdbID"];
        this._year = movieJson["Year"];
        this._object = movieJson;
    }

    private static chooseKeyword(): string{
        return Movie._keywords[this.getRandomIndex(Movie._keywords.length)];
    }

    private static getRandomIndex(arrayLen: number): number{
        return Math.floor(Math.random() * arrayLen);
    }

    private async f1(res: any){
        return res.data;
    }
}

export = Movie;
