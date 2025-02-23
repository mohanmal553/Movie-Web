import { NavLink } from "react-router-dom";
import movie_card_obj from "./MovieCard.module.css";
export function MovieCard(currentMovie) {
    return (
        <div className={movie_card_obj["div-main"]}>
            <div className={movie_card_obj["div-poster"]}><img src={currentMovie.currentMovie.Poster} /></div>
            <NavLink to={`/Movie/${currentMovie.currentMovie.imdbID}`}>   {/* redirect to the path on click Watch Now */}
                <div className={movie_card_obj["div-watch"]}>Watch Now</div>
            </NavLink>
        </div>
    )
}