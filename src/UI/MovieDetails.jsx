import { useLoaderData, NavLink } from "react-router-dom";
import movie_det_obj from "./MovieDetails.module.css";
export function MovieDetails() {
    let data = useLoaderData(); // Get the data return by loder
    return (
        <div className={movie_det_obj["div-main"]}>
            <div className={movie_det_obj["div-body"]}>
                <div className={movie_det_obj["div-card-section"]}>
                    <div className={movie_det_obj["div-poster"]}><img src={data.Poster} /></div>
                </div>

                <div className={movie_det_obj["div-details-section"]}>
                    <div className={movie_det_obj["div-details"]}>
                        <p>{data.Title}</p>
                        <p><font>Writer: </font>{data.Writer}</p>
                        <p><font>Director: </font>{data.Director}</p>
                        <p><font>Actors: </font>{data.Actors}</p>
                        <p><font>Genre: </font>{data.Genre}</p>
                        <p><font>Language: </font>{data.Language}</p>
                        <p><font>Released: </font>{data.Released}</p>
                        <p><font>Plot: </font>{data.Plot}</p>
                    </div>
                    <center><NavLink to="/Movie"><p>Goto Movie</p></NavLink></center>
                </div>
            </div>
        </div>
    )
}