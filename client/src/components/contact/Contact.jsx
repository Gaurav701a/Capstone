import React, { useState } from "react";
import Back from "../common/back/Back";
import emailjs from "emailjs-com"; // Import EmailJS library
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill in all fields.");
        return;
      }
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_jhdmpho",
        "template_0uwseti",
        e.target,
        "_cWRh_9YmZmsi_Kax"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success or display message to the user
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          }); // Reset form data after successful submission
        },
        (error) => {
          console.error(error.text);
          // Handle error or display error message to the user
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <img src="sb.jpg" alt="" />
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>404, Jane Corporate Park, Bandra West, Mumbai</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p name="to_name">seekhobharat7@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 2332900124</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required // make field mandatory
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required // make field mandatory
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required // make field mandatory
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required // make field mandatory
              >
                Create a message here...
              </textarea>
              <button type="submit" className="primary-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
