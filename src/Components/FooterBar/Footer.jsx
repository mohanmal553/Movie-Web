import footer_obj from "./Footer.module.css";
export function Footer() {
    return (
        <div className={footer_obj["div-main"]}>
            <div className={footer_obj["div-title"]}>myMovies.com</div>
            <div className={footer_obj["div-social"]}>
                <p>
                    <i className="fa-brands fa-facebook" />
                    <i className="fa-brands fa-instagram" />
                    <i className="fa-brands fa-twitter" />
                </p>
            </div>
            <div className={footer_obj["div-copyright"]}>
                Copyright ©2025 All rights reserved | This template is made with🎦by myMovies.com
            </div>
        </div>
    )
}