import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4">Terms and Conditions</h1>
          
          <div className="mb-4">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Globe Integrity's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="mb-4">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Globe Integrity's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Globe Integrity's website are provided on an 'as is' basis. Globe Integrity makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="mb-4">
            <h2>4. Limitations</h2>
            <p>
              In no event shall Globe Integrity or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Globe Integrity's website, even if Globe Integrity or a Globe Integrity authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </div>

          <div className="mb-4">
            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Globe Integrity's website could include technical, typographical, or photographic errors. Globe Integrity does not warrant that any of the materials on its website are accurate, complete, or current. Globe Integrity may make changes to the materials contained on its website at any time without notice. However, Globe Integrity does not make any commitment to update the materials.
            </p>
          </div>

          <div className="mb-4">
            <h2>6. Links</h2>
            <p>
              Globe Integrity has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Globe Integrity of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div className="mb-4">
            <h2>7. Modifications</h2>
            <p>
              Globe Integrity may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="mb-4">
            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>

          <div className="mb-4">
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              Email: support@globeintegrity.com<br />
              Phone: +1-844-787-4652
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
