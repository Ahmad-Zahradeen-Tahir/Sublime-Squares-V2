import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div>
        <input
          type="text"
          name="Fullname"
          id="Fullname"
          placeholder="Enter Full Name"
        />
      </div>
      <div>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Enter Email Address"
        />
      </div>
      <div>
        <textarea name="message" id="message" placeholder="Enter Message" />
        <a
          href="#"
          className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-green-900 border border-white-900 rounded-lg transition duration-200"
        >
          Submit
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
