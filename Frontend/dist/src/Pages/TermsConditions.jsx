import React from "react";
import PageMeta from "../components/PageMeta";
import "../styles/TermsConditions.css";

function TermsConditions() {
  return (
    <div className="legal-page terms-container">
      <PageMeta
        title="Terms and Conditions | DIDeccan India"
        description="Terms of use for the DIDeccan India website."
      />
      <h1>Terms and Conditions</h1>
      <h3>Acceptance of Terms</h3>
      <p>
        By using this Website, you confirm that you accept these Terms and agree
        to comply with them. These Terms apply to all visitors, users, and others
        who access or use the Website.
      </p>

      <h3>Use of the Website</h3>
      <p>You agree to use the Website only for lawful purposes. You shall not:</p>
      <ul>
        <li>Violate any applicable local, national, or international law.</li>
        <li>Attempt to gain unauthorized access to any portion of the Website.</li>
        <li>Disrupt or interfere with the security or functionality of the Website.</li>
        <li>Use the Website to transmit harmful or offensive content.</li>
      </ul>

      <h3>Intellectual Property</h3>
      <p>
        All content, trademarks, logos, graphics, and software on this Website are
        the property of DIDeccanIndia or its licensors and are protected by
        intellectual property laws. You may not reproduce, distribute, or use any
        content from this Website without prior written permission from us.
      </p>

      <h3>Services</h3>
      <p>
        Descriptions of services offered on the Website are provided for
        informational purposes only. We reserve the right to modify, update, or
        discontinue services at any time without prior notice.
      </p>

      <h3>Changes to Terms</h3>
      <p>
        We may update these Terms from time to time. The updated Terms will be
        effective immediately upon posting on the Website. Your continued use of
        the Website after changes constitutes your acceptance of the new Terms.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns regarding these Terms, please contact us at:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:hr@dideccanindia.com">hr@dideccanindia.com</a></li>
        <li><strong>Phone:</strong>+91 7981559252</li>
        <li><strong>Address:</strong> KKR Heights, Flat Nos. 401 & 402, D.No. 23-8-158, Air Bypass Rd,
                                     New Balaji Colony, Tirupati, Andhra Pradesh 517502</li>
      </ul>
    </div>
  );
}

export default TermsConditions;
