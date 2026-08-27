import React from "react";
import PageMeta from "../components/PageMeta";
import "../styles/FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "What does DIDeccan India do?",
      answer:
        "We build homegrown digital products and provide technology services including web and mobile development, DevOps, software testing, AI, cybersecurity, SAP, medical coding, and mortgage operations support.",
    },
    {
      question: "Which products do you currently offer?",
      answer:
        "Student Book, Happy Ride, Business Guider, Tirumala Yatra, My Finaz, and MOBOTOS.",
    },
    {
      question: "How can I request a consultation?",
      answer: "Use the contact form or email business@dideccanindia.com. For hiring, write to hr@dideccanindia.com.",
    },
    {
      question: "Do you provide custom solutions?",
      answer: "Yes. We tailor engineering, cloud, and product work to the needs of businesses across industries.",
    },
    {
      question: "Is my data safe with DIDeccan India?",
      answer: "We follow strict data security practices as outlined in our Privacy Policy.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are headquartered in Tirupati, Andhra Pradesh, with a Bangalore office at 01, Hennur Main Rd, PO, opposite to Yulu Center, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043.",
    },
  ];

  return (
    <main className="faq-page">
      <PageMeta
        title="FAQ | DIDeccan India"
        description="Frequently asked questions about DIDeccan products, services, and how to get in touch."
      />
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Insights</p>
          <h1>Frequently asked questions</h1>
          <p>Answers about products, services, locations, and how to work with DIDeccan.</p>
        </div>
      </section>
      <section className="section">
        <div className="legal-page faq-panel">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQ;
