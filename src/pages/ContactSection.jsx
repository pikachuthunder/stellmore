import { useState, useRef, useEffect } from "react";
import "./ContactSection.css";

const services = [
  "Commercial Lighting",
  "Residential Lighting",
  "Hospitality Lighting",
  "Landscape Lighting",
  "Consultation Only",
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6aaa0257-66f9-47b0-b624-b5d293363ced",
          subject: `New Enquiry from ${form.name} — City Fanoos`,
          name: form.name,
          email: form.email,
          phone: form.phone || "—",
          company: form.company || "—",
          service: form.service || "—",
          message: form.message,
          from_name: "City Fanoos Website",
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please email us directly at sales2@cityfanooslighting.com");
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong. Please email us directly at sales2@cityfanooslighting.com");
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-grain" />
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />

      <div className={`contact-inner ${visible ? "contact-visible" : ""}`}>

        {/* ── Left panel ── */}
        <div className="contact-left">
          <p className="contact-eyebrow">Get In Touch</p>
          <h2 className="contact-title">
            Let's Shape<br />
            <span className="contact-title-gold">Your Light</span>
          </h2>
          <p className="contact-desc">
            Every great space begins with a conversation. Tell us about your project and our design team will reach out within 24 hours.
          </p>

          {/* Info blocks */}
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Branch</p>
                <p className="contact-info-value">CBMC Building, Baniyas Square, Deira Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Phone</p>
                <p className="contact-info-value">+971 4 228 8067 , +971 50 199 3947</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">sales2@cityfanooslighting.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Working Hours</p>
                <p className="contact-info-value">Mon – Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="contact-left-rule">
            <span className="contact-left-rule-line" />
            <span className="contact-left-rule-diamond" />
            <span className="contact-left-rule-line" />
          </div>
        </div>

        {/* ── Right panel — Form ── */}
        <div className="contact-right">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group ${focused === "name" || form.name ? "form-group--active" : ""}`}>
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                  <div className="form-underline" />
                </div>

                <div className={`form-group ${focused === "email" || form.email ? "form-group--active" : ""}`}>
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                  <div className="form-underline" />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${focused === "phone" || form.phone ? "form-group--active" : ""}`}>
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                  <div className="form-underline" />
                </div>

                <div className={`form-group ${focused === "company" || form.company ? "form-group--active" : ""}`}>
                  <label className="form-label">Company / Project</label>
                  <input
                    className="form-input"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                  />
                  <div className="form-underline" />
                </div>
              </div>

              <div className={`form-group ${focused === "service" || form.service ? "form-group--active" : ""}`}>
                <label className="form-label">Service Required</label>
                <select
                  className="form-input form-select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled />
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="form-underline" />
                <div className="form-select-arrow">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={`form-group ${focused === "message" || form.message ? "form-group--active" : ""}`}>
                <label className="form-label">Your Message *</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
                <div className="form-underline" />
              </div>

              <button className="form-submit" type="submit" disabled={loading}>
                {loading ? (
                  <span className="form-submit-loading">
                    <span className="form-spinner" />
                    Sending…
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="form-submit-glow" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="#C9A84C" strokeWidth="1.2"/>
                  <path d="M10 16L14 20L22 12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="success-title">Message Received</h3>
              <p className="success-text">
                Thank you for reaching out. Our design team will contact you within 24 hours.
              </p>
              <button
                className="success-reset"
                onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", company:"", service:"", message:"" }); }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}