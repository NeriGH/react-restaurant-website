import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contactez nous</h1>
        <form>
          <label htmlFor="lastname">Nom:</label>
          <input type="text" id="lastname" name="lastname" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Sujet:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="contact-info">
        <h1>Nos informations</h1>
        <p>297 Chau. Fernand Forest, 59200 Tourcoing</p>
        <p>Tél : 03.20.23.84.65</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.130857801912!2d3.147439815741771!3d50.736061779515836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1678735639537!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
