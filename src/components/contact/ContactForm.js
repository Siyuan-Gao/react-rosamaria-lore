import React, { useState } from "react";

export default function ContactForm() {
    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleInput = (e) => {
        SetFormData({
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name && !formData.email) {
            console.log("##user submitted form: ", formData);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your Name (required)
                <br />
                <input type="text" name="name" onChange={handleInput} />
            </label>
            <label>
                Your Email (required)
                <br />
                <input type="text" name="email" onChange={handleInput} />
            </label>
            <label>
                Subject
                <br />
                <input type="text" name="subject" onChange={handleInput} />
            </label>
            <label>
                Your Message
                <br />
                <textarea
                    name="message"
                    cols="40"
                    rows="10"
                    onChange={handleInput}
                ></textarea>
                <button className="submit" type="submit">
                    Submit
                </button>
            </label>
        </form>
    );
}
