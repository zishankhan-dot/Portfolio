import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_erv7ljm";
const TEMPLATE_ID = "template_dev5asn";
const PUBLIC_KEY  = "kDVenloIjGeZh9PnK";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Let&apos;s work<br />together</h2>
          <p className="contact-desc">
            I&apos;m open to graduate software engineering, backend, cloud, AI,
            and full-stack roles. Drop me a message and I&apos;ll get back to you.
          </p>

          <div className="contact-info-list">
            <a href="mailto:kenzeesh@gmail.com" className="contact-info-item">
              <span className="contact-info-icon">✉</span>
              kenzeesh@gmail.com
            </a>
            <a href="tel:+353083398622" className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              +353 083 398 7622
            </a>
            <span className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              Dublin, Ireland
            </span>
          </div>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="user_name">Full Name</label>
              <input
                id="user_name"
                className="form-input"
                type="text"
                name="user_name"
                placeholder="John Smith"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="user_email">Email Address</label>
              <input
                id="user_email"
                className="form-input"
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input
              id="subject"
              className="form-input"
              type="text"
              name="subject"
              placeholder="Job opportunity / Project collaboration"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-input form-textarea"
              name="message"
              placeholder="Tell me about the role or project..."
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message ›"}
          </button>

          {status === "success" && (
            <p className="form-feedback success">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback error">
              Something went wrong. Please email me directly at kenzeesh@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
