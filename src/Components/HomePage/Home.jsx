import {NavLink} from "react-router-dom";
import home_obj from './Home.module.css';
export function Home(){
    return(
        <div className={home_obj["div-main"]}>
            <div className={home_obj["text"]}>
                <p>EXPLORE THE LATEST IN MOVIE INDUSTRIES</p>
                <p>Unlimited Movie, TVs Shows & More.</p>
                <p>Discover the Top Best Movies and Dramas with a catchy subtitle like your Unlimited Guide to Must-Watch Content.</p>
                <NavLink to="/Movie"><p>Explore Now</p></NavLink>
            </div>
            <div className={home_obj["photo"]}></div>
        </div>
    );
}