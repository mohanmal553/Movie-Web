import { NavLink } from 'react-router-dom';
import err_obj from './ErrorPage.module.css';
export function ErrorPage() {
    return (
        <div className={err_obj["div-main"]}>
            <div className={err_obj["div-err"]}></div>
            <NavLink to="/Home"><button className={err_obj["div-btn"]}>GO to Home</button></NavLink>
        </div>
    );
}