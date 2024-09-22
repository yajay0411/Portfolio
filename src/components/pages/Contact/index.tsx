import React, { useState } from "react";
import css from "./Contact.module.css";
import emailjs from "emailjs-com";
import { setTitle } from "../../../shared/utils/SetTitle";

interface EmailData {
  user_name: string;
  user_email: string;
  message: string;
}

const service_key = import.meta.env.VITE_EMAIL_JS_SERVICE_KEY;
const template_key = import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY;
const public_key = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const ContactPage: React.FC = () => {
  setTitle("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(); // Send email with the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = () => {
    const emailData: EmailData = {
      user_name: formData.name, // EmailJS template variable for name
      user_email: formData.email, // EmailJS template variable for email
      message: formData.message, // EmailJS template variable for message
    };

    emailjs
      .send(
        service_key, // Replace with your actual EmailJS service ID
        template_key, // Replace with your actual EmailJS template ID
        emailData, // Pass the form data
        public_key // Replace with your actual public key from EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className={css["contact-container"]}>
      <h1 className={css["heading"]}>Contact Us</h1>
      <div className={css["contact-info"]}>
        <p>Fill out the form below to get in touch.</p>
        <div className={css["social-media"]}>
          <a
            href="https://www.linkedin.com/in/ajay-yadav-63365b241/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yajay0411"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={css["contact-form"]}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
