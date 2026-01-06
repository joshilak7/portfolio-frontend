import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const serviceID = "service_6st8c7j";
      const templateID = "template_k8juz5k";
      const publicKey = "HLWK7Nm8fBGlwRTwn";

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "luckyjoshi659@gmail.com",
      link: "mailto:luckyjoshi659@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Surat, Gujarat, India",
      link: "https://maps.google.com/?q=Surat+Gujarat+India",
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      value: "Usually within 24 hours",
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | MERN Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Lakki Joshi, MERN Stack Developer for project inquiries and collaborations."
        />
        <link rel="canonical" href="https://lakkijoshi.vercel.app/contact" />
      </Helmet>
      <section
        className="contact"
        id="contact"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="container">
          <h2>Get In Touch</h2>
          <p
            className="contact-description"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 50px",
            }}
          >
            Have a project in mind? Feel free to reach out. I'm always open to
            discussing new opportunities and creative ideas.
          </p>

          <div
            className="contact-container"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
            }}
          >
            <div
              className="contact-info"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {contactItems.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    target={
                      item.icon === "fas fa-map-marker-alt" ? "_blank" : "_self"
                    }
                    rel="noopener noreferrer"
                    className="contact-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "20px",
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                      borderRadius: "10px",
                      textDecoration: "none",
                      color: "inherit",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div
                      className="contact-icon"
                      style={{
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(255, 87, 34, 0.2))",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00bcd4",
                        fontSize: "1.5rem",
                        transition:
                          "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        flexShrink: 0,
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-details">
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          marginBottom: "5px",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--gray)", fontSize: "0.95rem" }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="contact-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "20px",
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                      borderRadius: "10px",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <div
                      className="contact-icon"
                      style={{
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(255, 87, 34, 0.2))",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00bcd4",
                        fontSize: "1.5rem",
                        transition:
                          "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        flexShrink: 0,
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-details">
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          marginBottom: "5px",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--gray)", fontSize: "0.95rem" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "40px",
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                borderRadius: "15px",
                border: "1px solid rgba(0, 188, 212, 0.2)",
              }}
            >
              {success && (
                <div
                  className="success-message"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 188, 212, 0.15), rgba(255, 87, 34, 0.15))",
                    borderLeft: "4px solid",
                    borderImage:
                      "linear-gradient(to bottom, #00bcd4, #ff5722) 1",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    animation: "fadeInUp 0.5s ease",
                    fontSize: "0.95rem",
                  }}
                >
                  <i
                    className="fas fa-check-circle"
                    style={{ marginRight: "10px", color: "#00bcd4" }}
                  ></i>
                  Thank you for your message! I will get back to you soon.
                </div>
              )}

              {error && (
                <div
                  className="error-message"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 87, 34, 0.15), rgba(255, 193, 7, 0.15))",
                    borderLeft: "4px solid",
                    borderImage:
                      "linear-gradient(to bottom, #ff5722, #ffc107) 1",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    animation: "fadeInUp 0.5s ease",
                    fontSize: "0.95rem",
                  }}
                >
                  <i
                    className="fas fa-exclamation-circle"
                    style={{ marginRight: "10px", color: "#ff5722" }}
                  ></i>
                  {error}
                </div>
              )}

              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                  }}
                >
                  Name <span style={{ color: "#ff5722" }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "15px",
                    border: "1px solid rgba(0, 188, 212, 0.2)",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                    color: "var(--light)",
                    fontSize: "1rem",
                    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    width: "100%",
                  }}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                  }}
                >
                  Email <span style={{ color: "#ff5722" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "15px",
                    border: "1px solid rgba(0, 188, 212, 0.2)",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                    color: "var(--light)",
                    fontSize: "1rem",
                    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    width: "100%",
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div
                className="form-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div className="form-group">
                  <label
                    htmlFor="phone"
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      fontSize: "0.95rem",
                    }}
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      padding: "15px",
                      border: "1px solid rgba(0, 188, 212, 0.2)",
                      borderRadius: "8px",
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                      color: "var(--light)",
                      fontSize: "1rem",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      width: "100%",
                    }}
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="subject"
                    style={{
                      marginBottom: "8px",
                      fontWeight: "500",
                      fontSize: "0.95rem",
                    }}
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      padding: "15px",
                      border: "1px solid rgba(0, 188, 212, 0.2)",
                      borderRadius: "8px",
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                      color: "var(--light)",
                      fontSize: "1rem",
                      transition:
                        "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      width: "100%",
                    }}
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                  }}
                >
                  Message <span style={{ color: "#ff5722" }}>*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    padding: "15px",
                    border: "1px solid rgba(0, 188, 212, 0.2)",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.7))",
                    color: "var(--light)",
                    fontSize: "1rem",
                    resize: "vertical",
                    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    minHeight: "150px",
                    width: "100%",
                  }}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={loading}
                style={{
                  marginTop: "10px",
                  padding: "16px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  width: "100%",
                  background: "linear-gradient(135deg, #00bcd4, #ff5722)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: "1",
                }}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending
                    Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <style jsx="true">{`
          input:focus,
          textarea:focus {
            outline: none;
            border-color: #00bcd4;
            box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.3);
            transform: translateY(-3px);
          }

          .contact-item:hover {
            transform: translateX(10px);
            background: linear-gradient(
              135deg,
              rgba(0, 188, 212, 0.15),
              rgba(255, 87, 34, 0.15)
            ) !important;
            border-color: #00bcd4;
          }

          .contact-item:hover > div:first-child {
            background: linear-gradient(135deg, #00bcd4, #ff5722) !important;
            color: white !important;
            transform: rotate(15deg) scale(1.1);
          }

          .btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: -1;
          }

          .btn:hover::before {
            left: 100%;
          }

          .btn:hover {
            background: linear-gradient(135deg, #008ba3, #e64a19);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 188, 212, 0.3);
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1200px) {
            .contact-container {
              gap: 40px !important;
            }

            .contact-form {
              padding: 35px !important;
            }
          }

          @media (max-width: 992px) {
            .contact-container {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }

            .contact-info {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr);
              gap: 15px !important;
            }

            .contact-item {
              flex-direction: column;
              text-align: center;
              gap: 12px !important;
              padding: 20px 15px !important;
            }

            .contact-icon {
              width: 50px !important;
              height: 50px !important;
              font-size: 1.3rem !important;
            }

            .contact-form {
              padding: 30px !important;
            }

            h2 {
              font-size: 2.2rem !important;
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 2rem !important;
              text-align: center;
              margin-bottom: 15px;
            }

            .contact-description {
              font-size: 1rem !important;
              margin: 0 auto 30px !important;
              padding: 0 15px;
            }

            .contact-info {
              grid-template-columns: 1fr 1fr;
              gap: 15px !important;
            }

            .contact-item {
              padding: 18px 12px !important;
            }

            .contact-icon {
              width: 45px !important;
              height: 45px !important;
              font-size: 1.2rem !important;
            }

            .contact-details h3 {
              font-size: 1rem !important;
            }

            .contact-details p {
              font-size: 0.85rem !important;
            }

            .contact-form {
              padding: 25px !important;
              gap: 15px !important;
            }

            .form-row {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
            }

            input,
            textarea {
              padding: 14px !important;
              font-size: 0.95rem !important;
            }

            textarea {
              min-height: 130px !important;
            }

            .btn {
              padding: 14px !important;
              font-size: 0.95rem !important;
            }
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 1.8rem !important;
            }

            .contact-description {
              font-size: 0.95rem !important;
              margin-bottom: 25px !important;
              line-height: 1.6;
            }

            .contact-info {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }

            .contact-item {
              flex-direction: row !important;
              text-align: center !important;
              padding: 15px !important;
            }

            .contact-icon {
              width: 50px !important;
              height: 50px !important;
              font-size: 1.3rem !important;
            }

            .contact-details h3 {
              font-size: 1rem !important;
            }

            .contact-form {
              padding: 20px !important;
              gap: 12px !important;
            }

            .form-group label {
              font-size: 0.9rem !important;
              margin-bottom: 6px !important;
            }

            input,
            textarea {
              padding: 12px !important;
              font-size: 0.9rem !important;
            }

            textarea {
              min-height: 120px !important;
            }

            .btn {
              padding: 13px !important;
              font-size: 0.9rem !important;
            }

            .success-message,
            .error-message {
              padding: 12px !important;
              font-size: 0.9rem !important;
              margin-bottom: 15px !important;
            }
          }

          @media (max-width: 400px) {
            h2 {
              font-size: 1.6rem !important;
            }

            .contact-description {
              font-size: 0.9rem !important;
              margin-bottom: 20px !important;
              padding: 0 10px;
            }

            .contact-item {
              padding: 12px !important;
              gap: 10px !important;
            }

            .contact-icon {
              width: 40px !important;
              height: 40px !important;
              font-size: 1.1rem !important;
            }

            .contact-details h3 {
              font-size: 0.95rem !important;
              margin-bottom: 3px !important;
            }

            .contact-details p {
              font-size: 0.85rem !important;
            }

            .contact-form {
              padding: 18px !important;
              gap: 10px !important;
            }

            .form-group label {
              font-size: 0.85rem !important;
              margin-bottom: 5px !important;
            }

            input,
            textarea {
              padding: 10px !important;
              font-size: 0.85rem !important;
              border-radius: 6px !important;
            }

            textarea {
              min-height: 100px !important;
            }

            .btn {
              padding: 12px !important;
              font-size: 0.85rem !important;
              margin-top: 5px !important;
            }

            .success-message,
            .error-message {
              padding: 10px !important;
              font-size: 0.85rem !important;
            }
          }

          @media (max-width: 320px) {
            .contact-item {
              padding: 10px !important;
            }

            .contact-icon {
              width: 35px !important;
              height: 35px !important;
              font-size: 1rem !important;
            }

            .contact-form {
              padding: 15px !important;
            }

            input,
            textarea {
              padding: 8px !important;
              font-size: 0.8rem !important;
            }

            .btn {
              padding: 10px !important;
              font-size: 0.8rem !important;
            }
          }

          @media (max-height: 500px) and (orientation: landscape) {
            .contact-container {
              grid-template-columns: 1fr 1fr !important;
              gap: 20px !important;
            }

            .contact-info {
              grid-template-columns: 1fr !important;
            }

            .contact-item {
              padding: 12px !important;
            }

            .contact-form {
              padding: 20px !important;
            }

            textarea {
              min-height: 100px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
            .contact-container {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            .contact-info {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
            .contact-container {
              grid-template-columns: 1fr 1fr !important;
              gap: 30px !important;
            }

            .contact-info {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-height: 600px) {
            .contact-form {
              padding: 20px !important;
            }

            textarea {
              min-height: 80px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
