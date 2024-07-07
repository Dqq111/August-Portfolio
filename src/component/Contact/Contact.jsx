import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import InputContact from "./InputContact.jsx";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wxadmfe", "template_j7g93lk", form.current, {
        publicKey: "aIkosBXTPbtfPJsK2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h2>Contact Me</h2>
      <p className="contactDesc">
        Interested in working together or have a question? Please Fill out the
        form below, and I'll respond as soon as possible.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <InputContact type="text" placeholder="Your Name"></InputContact>
        <InputContact type="email" placeholder="Your Email"></InputContact>
        <InputContact
          textBox
          type="text"
          name="message"
          placeholder="Your Message"
        ></InputContact>
        <button className="submitBtn" type="submit" value="send">
          Submit
        </button>
      </form>
      {/* <div className="links">
        <a
          href="https://github.com/Dqq111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkImg">
            <img src={Github} alt="github img" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/august-nguyen-ab691920a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkImg">
            <img src={LinkedIn} alt="LinkedIn img" />
          </div>
        </a>
      </div> */}
    </section>
  );
}
