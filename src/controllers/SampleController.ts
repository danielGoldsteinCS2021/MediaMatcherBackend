import Movie from "../models/Movie";

class SampleController{
    private movie: Movie = new Movie();
    public printMovieObject(){
        console.log(this.movie.getTitle);
        console.log(this.movie.getId);
        console.log(this.movie.getYear);
        console.log('\n\n');
    }
}

export = new SampleController();
