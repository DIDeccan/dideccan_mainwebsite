import React, { useContext, useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "react-feather";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegistrationContext } from "../Contextapi/RegistrationContext";
import { offices } from "../data/site";
import PageMeta from "./PageMeta";
import "../styles/Contact.css";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  topic: "Product partnership",
  message: "",
};

const socials = [
  {
    href: "https://www.linkedin.com/company/dideccan-india-software-technologies-pvt-ltd/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.facebook.com/people/DIDeccanIndia/61579760649607/",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/dideccanindia?igsh=N3F2bXVkeGNiZGEw",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { submitContact, loading } = useContext(RegistrationContext) || {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.phone && !/^[0-9+\-\s()]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.message.trim() || form.message.trim().length < 12) {
      next.message = "Tell us a little more about the project.";
    }
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitError("");
    setSent(false);
    if (Object.keys(next).length) return;

    if (!submitContact) {
      setSubmitError("Contact service is not available.");
      return;
    }

    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        topic: form.topic,
        message: form.message.trim(),
      });
      setSent(true);
      setForm(initial);
      toast.success("Message sent. We will get back to you shortly.");
    } catch (err) {
      const message = err?.message || "Could not send your message.";
      setSubmitError(message);
      toast.error(message);
    }
  };

  return (
    <>
    <main className="contact-page">
      <PageMeta
        title="Contact | DIDeccan India"
        description="Have an idea? Let's build it. Talk to DIDeccan about products, platforms, and technology partnerships."
      />

      <section className="cp-hero">
        <div className="container cp-hero-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h1>
              Have an idea?
              <span>Let&apos;s build it.</span>
            </h1>
            <p className="cp-lead">
              Product ideas, partnerships, services, or hiring — the DIDeccan team in Tirupati and
              Bangalore is ready to talk.
            </p>
            <ul className="cp-reach">
              <li>
                <a href="mailto:business@dideccanindia.com">
                  <span className="cp-icon" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <span>
                    <small>Email</small>
                    <strong>business@dideccanindia.com</strong>
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:7981559252">
                  <span className="cp-icon" aria-hidden="true">
                    <Phone size={18} />
                  </span>
                  <span>
                    <small>Phone</small>
                    <strong>+91 79815 59252</strong>
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <span className="cp-icon" aria-hidden="true">
                    <Clock size={18} />
                  </span>
                  <span>
                    <small>Hours</small>
                    <strong>Mon–Sat, 9:30 AM – 6:30 PM IST</strong>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <form className="cp-form contact-form" onSubmit={handleSubmit} noValidate>
            <p className="cp-form-kicker">Write to us</p>
            <h2>Start a conversation</h2>
            <div className="cp-fields">
              <label>
                Name
                <input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  placeholder="Optional"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </label>
              <label>
                Company
                <input
                  name="company"
                  placeholder="Company or team"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </label>
              <label className="is-full">
                Project type
                <select name="topic" value={form.topic} onChange={handleChange}>
                  <option>Product partnership</option>
                  <option>Custom software / services</option>
                  <option>Hiring & careers</option>
                  <option>General inquiry</option>
                </select>
              </label>
              <label className="is-full">
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us what you are building…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Start a conversation"} <ArrowUpRight size={16} />
            </button>
            {sent && (
              <p className="cp-note">
                Message received. If you need us sooner, write to business@dideccanindia.com.
              </p>
            )}
            {submitError && <p className="cp-note is-error">{submitError}</p>}
          </form>
        </div>
      </section>

      <section className="section cp-offices">
        <div className="container">
          <p className="section-kicker">Locations</p>
          <h2 className="section-title">
            Tirupati. <span className="gradient-text">Bangalore.</span>
          </h2>
          <div className="cp-office-grid">
            {offices.map((office, index) => (
              <article className={`cp-office ${index === 0 ? "is-hq" : ""}`} key={office.city}>
                <p className="cp-office-tag">{office.tag}</p>
                <h3>
                  <span className="cp-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  {office.city}
                </h3>
                <p className="cp-office-meta">
                  {office.region} — {office.text}
                </p>
                {office.address ? <p className="cp-address">{office.address}</p> : null}
                {office.map ? (
                  <a href={office.map} target="_blank" rel="noopener noreferrer">
                    Open in Maps <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-close">
        <div className="container">
          <div className="cp-close-card">
            <a className="cp-hire" href="mailto:hr@dideccanindia.com">
              <span className="cp-icon" aria-hidden="true">
                <Mail size={18} />
              </span>
              <span>
                <small>Hiring</small>
                <strong>hr@dideccanindia.com</strong>
              </span>
            </a>
            <div className="cp-social">
              <p>Follow us</p>
              <div>
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
}

export default Contact;
