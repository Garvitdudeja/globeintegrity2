import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4">Privacy Policy</h1>
          
          <div className="mb-4">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our calculator, request information about our insurance products, or contact us for support. This may include:
            </p>
            <ul>
              <li>Personal information (name, email address, phone number)</li>
              <li>Demographic information (age, gender, location)</li>
              <li>Financial information relevant to insurance calculations</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process insurance calculations and provide quotes</li>
              <li>Communicate with you about our products and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist us in operating our website and conducting our business</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-4">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <p>You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.</p>
          </div>

          <div className="mb-4">
            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div className="mb-4">
            <h2>7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
              <li>Object to the processing of your personal information</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>
          </div>

          <div className="mb-4">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </div>

          <div className="mb-4">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="mb-4">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              Email: support@globeintegrity.com<br />
              Phone: +1-844-787-4652<br />
              Address: Globe Integrity, 2560 S Ocean Blvd APT 314, Palm Beach, FL, 33480-5447, United States
            </p>
          </div>

          <div className="mb-4">
            <p><small>Last updated: {new Date().toLocaleDateString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
