import React from "react";
import PageMeta from "../components/PageMeta";
import "../styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="legal-page privacy-policy-container">
      <PageMeta
        title="Privacy Policy | DIDeccan India"
        description="How DIDeccan India collects, uses, and protects personal information."
      />
      <h1>Privacy Policy</h1>
      {/* <p><strong>Effective Date:</strong> [September-2025]</p> */}
      <p><strong>Company Name:</strong> DIDeccanIndia</p>
      <p><strong>Website:</strong> dideccanindia.com</p>

      <p>
        At <strong>DIDeccanIndia</strong>, we value your privacy and are committed to protecting the personal information you share with us.
        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
      </p>

      <h3> Information We Collect</h3>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone number, and any information you provide when filling forms or contacting us.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> IP address, browser type, operating system, and browsing behavior on our website.
        </li>
        <li>
          <strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your user experience and analyze website usage.
        </li>
      </ul>

      <h3> How We Use Your Information</h3>
      <ul>
        <li>Providing and improving our services.</li>
        <li>Responding to inquiries and customer support requests.</li>
        <li>Sending important updates, newsletters, or promotional emails (only with your consent).</li>
        <li>Analyzing website traffic and usage trends.</li>
        <li>Ensuring website security and preventing fraud.</li>
      </ul>

      <h3> Data Sharing & Disclosure</h3>
      <p>We do not sell or rent your personal information to third parties. Your information may be shared only in the following situations:</p>
      <ul>
        <li>With trusted service providers to help operate our website or provide services.</li>
        <li>When required by law or to protect legal rights.</li>
        <li>In connection with a business transfer or merger, subject to confidentiality.</li>
      </ul>

      <h3> Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information 
        from unauthorized access, alteration, disclosure, or destruction.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
