import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ EmailJS import

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
      // Replace these with your actual EmailJS values
      const serviceID = "service_6st8c7j"; // e.g., service_abc123
      const templateID = "template_k8juz5k"; // e.g., template_xyz456
      const publicKey = "HLWK7Nm8fBGlwRTwn"; // e.g., user_1234567890

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
    <section
      className="contact"
      id="contact"
      style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container">
        <h2>Get In Touch</h2>
        <p
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
          }}
        >
          {/* Contact Info */}
          <div
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    background: "rgba(30, 41, 59, 0.5)",
                    borderRadius: "10px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(37, 99, 235, 0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      fontSize: "1.5rem",
                      transition: "var(--transition)",
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--gray)" }}>{item.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "20px",
                    background: "rgba(30, 41, 59, 0.5)",
                    borderRadius: "10px",
                    transition: "var(--transition)",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(37, 99, 235, 0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      fontSize: "1.5rem",
                      transition: "var(--transition)",
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--gray)" }}>{item.value}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "40px",
              background: "rgba(30, 41, 59, 0.5)",
              borderRadius: "15px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {success && (
              <div
                style={{
                  background: "rgba(0, 188, 212, 0.1)",
                  borderLeft: "4px solid var(--primary)",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  animation: "fadeInUp 0.5s ease",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ marginRight: "10px", color: "var(--primary)" }}
                ></i>
                Thank you for your message! I will get back to you soon.
              </div>
            )}

            {error && (
              <div
                style={{
                  background: "rgba(255, 87, 34, 0.1)",
                  borderLeft: "4px solid var(--secondary)",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  animation: "fadeInUp 0.5s ease",
                }}
              >
                <i
                  className="fas fa-exclamation-circle"
                  style={{ marginRight: "10px", color: "var(--secondary)" }}
                ></i>
                {error}
              </div>
            )}

            {/* Input fields */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="name"
                style={{ marginBottom: "8px", fontWeight: "500" }}
              >
                Name <span style={{ color: "var(--secondary)" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--light)",
                  fontSize: "1rem",
                  transition: "var(--transition)",
                }}
                placeholder="Your Name"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="email"
                style={{ marginBottom: "8px", fontWeight: "500" }}
              >
                Email <span style={{ color: "var(--secondary)" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--light)",
                  fontSize: "1rem",
                  transition: "var(--transition)",
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="phone"
                  style={{ marginBottom: "8px", fontWeight: "500" }}
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
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--light)",
                    fontSize: "1rem",
                    transition: "var(--transition)",
                  }}
                  placeholder="+91 12345 67890"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="subject"
                  style={{ marginBottom: "8px", fontWeight: "500" }}
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
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--light)",
                    fontSize: "1rem",
                    transition: "var(--transition)",
                  }}
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="message"
                style={{ marginBottom: "8px", fontWeight: "500" }}
              >
                Message <span style={{ color: "var(--secondary)" }}>*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  padding: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--light)",
                  fontSize: "1rem",
                  resize: "vertical",
                  transition: "var(--transition)",
                  minHeight: "150px",
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
              }}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending Message...
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

      {/* styles */}
      <style jsx="true">{`
        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.1);
          transform: translateY(-3px);
        }

        a:hover,
        div[style*="background: rgba(30, 41, 59, 0.5)"]:hover {
          transform: translateX(10px);
          background: rgba(37, 99, 235, 0.1) !important;
          border-color: var(--primary);
        }

        a:hover > div:first-child,
        div[style*="background: rgba(30, 41, 59, 0.5)"]:hover
          > div:first-child {
          background: var(--primary) !important;
          color: white !important;
          transform: rotate(15deg) scale(1.1);
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 25px !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
