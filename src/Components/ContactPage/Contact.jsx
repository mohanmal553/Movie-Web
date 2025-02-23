import { Form } from "react-router-dom";
import contact_obj from "./Contact.module.css";

export let contactData = async ({ request }) => {
    try {
        let res = await request.formData();
        let data = Object.fromEntries(res);
        console.log(data);
        return null;
    }
    catch (err) {
        console.log(err);
    }
}

export function Contact() {
    return (
        <div className={contact_obj["div-main"]}>
            <div className={contact_obj["div-title"]}><i className="fa-solid fa-headphones-simple" /> Contact Us</div>
            <div className={contact_obj["div-form"]}>
                <Form method="POST" action="/Contact">
                    <i className={`fa-solid fa-user ${contact_obj["icon-user"]}`} />
                    <input type="text" name="name" placeholder="Name" className={contact_obj["input-text"]} required />
                    <br />
                    <i className={`fa-solid fa-envelope ${contact_obj["icon-email"]}`} />
                    <input type="text" name="email" placeholder="Email" className={contact_obj["input-text"]} required />
                    <br />
                    <i className={`fa-solid fa-message ${contact_obj["icon-message"]}`} />
                    <textarea name="message" placeholder="Message" className={contact_obj["input-message"]} required></textarea>
                    <br />
                    <button type="submit" className={contact_obj["btn"]}>Submit</button>
                </Form>
            </div>
        </div>
    )
}