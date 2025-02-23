import loading_obj from "./Loading.module.css";
export function Loading() {
    return (
        <div className={loading_obj["div-main"]}>
            <div className={loading_obj["div-img"]}></div>
        </div>
    );
}