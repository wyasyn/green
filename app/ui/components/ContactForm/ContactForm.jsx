"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        sender: "",
        contact: "",
        content: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios
                .post("/api/send", formData)
                .then((res) => {
                    setFormData({
                        sender: "",
                        contact: "",
                        content: "",
                    });
                    router.refresh();
                    toast.success(res.data.message);
                })
                .catch((err) => {
                    toast.error(err);
                });
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-grp">
                <label htmlFor="sender">Full Name</label>
                <input
                    type="text"
                    required
                    name="sender"
                    id="sender"
                    placeholder="Your Full Name"
                    value={formData.sender}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-grp">
                <label htmlFor="contact">E-mail</label>
                <input
                    type="email"
                    required
                    name="contact"
                    id="contact"
                    placeholder="Your E-mail Address"
                    value={formData.contact}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-grp">
                <label htmlFor="content">Message</label>
                <textarea
                    type="text"
                    name="content"
                    required
                    rows={4}
                    id="content"
                    placeholder="Your Message"
                    value={formData.content}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">
                <FaPaperPlane /> Send
            </button>
        </form>
    );
}
