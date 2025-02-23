import { NavLink } from 'react-router-dom';
import nav_obj from './Nav.module.css'
import { useRef } from 'react'

export function Nav() {

    let line_ref = useRef(null);
    let xmark_ref = useRef(null);
    let nav_ul = useRef(null);

    let lineClick = () => {
        line_ref.current.style.display = "none";
        xmark_ref.current.style.display = "block";
        nav_ul.current.style.left = "0px";
        nav_ul.current.style.transition = "500ms";
    }
    let xmarkClick = () => {
        line_ref.current.style.display = "block";
        xmark_ref.current.style.display = "none";
        nav_ul.current.style.left = "-180px";
        nav_ul.current.style.transition = "500ms";
    }
    let liClick = () => {
        line_ref.current.style.display = "block";
        xmark_ref.current.style.display = "none";
        nav_ul.current.style.left = "-180px";
        nav_ul.current.style.transition = "500ms";
    }
    return (
        <div className={nav_obj["div-body"]}>
            <div className={nav_obj["div-main"]}>
                <div className={nav_obj["my-name"]}>myMovies</div>
                <div className={nav_obj["nav-item"]}>
                    <nav className={nav_obj["ul"]} ref={nav_ul}>
                        <NavLink to="/Home" onClick={liClick} className={({ isActive }) => isActive ? nav_obj.active : nav_obj.inactive}><li >Home</li></NavLink>
                        <NavLink to="/Movie" onClick={liClick} className={({ isActive }) => isActive ? nav_obj.active : nav_obj.inactive}><li >Movies</li></NavLink>
                        <NavLink to="/Contact" onClick={liClick} className={({ isActive }) => isActive ? nav_obj.active : nav_obj.inactive}><li >Contact</li></NavLink>
                    </nav>
                </div>
                <div className={nav_obj["hamburger_menu"]}>
                    <i className={`fa-solid fa-bars ${nav_obj["line"]}`} onClick={lineClick} ref={line_ref}></i>
                    <i className={`fa-solid fa-xmark ${nav_obj["xmark"]}`} onClick={xmarkClick} ref={xmark_ref}></i>
                </div>
            </div>
        </div>
    );
}
