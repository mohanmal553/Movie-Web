import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../../UI/MovieCard";
import movie_obj from "./Movie.module.css";
export function Movie() {
    let movieData = useLoaderData();
    return (
        <div className={movie_obj["div-main"]}>
            <div className={movie_obj["div-body"]}>
                {
                    movieData.Search.map((currentMovie) => {
                        return <MovieCard key={currentMovie.imdbID} currentMovie={currentMovie} />
                    })
                }
            </div>
        </div>
    )
}