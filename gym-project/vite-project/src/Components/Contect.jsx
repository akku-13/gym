import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container">
          <div className="content">
            <div className="box form wow slideInLeft">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Message"
                  required
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="box text wow slideInRight">
              <h2>Get Connected with Gym</h2>
              <p className="title-p">
              "Have questions about our services, memberships, or programs? We'd love to hear from you! Reach out to us today, and let’s get you started on your fitness journey."
              </p>
              <div className="info">
                <ul>
                  <li>
                    <span className="fa fa-map-marker" /> BRS nagar
                  </li>
                  <li>
                    <span className="fa fa-phone" /> 91 8437317193
                  </li>
                  <li>
                    <span className="fa fa-envelope" /> crazyabhijumper@gmail.com
                  </li>
                </ul>
              </div>
              <div className="social">
                <a href="#">
                  <span className="fa fa-facebook" />
                </a>
                <a href="#">
                  <span className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <span className="fa fa-skype" />
                </a>
                <a href="#">
                  <span className="fa fa-youtube-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
