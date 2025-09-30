import React from 'react';
import './RootPage.css';

const RootPage = () => {
  return (
    <div className="root-page">
      <div className="header">
        <h1 className="title">Scannecto Just-Scan Privacy Policy</h1>
        <p className="subtitle">Effective Date: [Date] | Last Updated: [Date]</p>
      </div>

      <div className="summary">
        <h2>Summary</h2>
        <p>Scannecto Just-Scan ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our scanning application.</p>
      </div>

      <div className="toc">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#information-we-collect">Information We Collect</a></li>
          <li><a href="#how-we-use-information">How We Use Information</a></li>
          <li><a href="#information-sharing">Information Sharing</a></li>
          <li><a href="#data-security">Data Security</a></li>
          <li><a href="#your-rights">Your Rights</a></li>
          <li><a href="#childrens-privacy">Children's Privacy</a></li>
          <li><a href="#changes-to-policy">Changes to This Policy</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>

      <div className="section" id="information-we-collect">
        <h1>1. Information We Collect</h1>
        
        <h2>1.1 Information You Provide</h2>
        <ul>
          <li>Account registration information (name, email address)</li>
          <li>Profile information and preferences</li>
          <li>Support communications and feedback</li>
          <li>Documents and images you choose to scan</li>
        </ul>

        <h2>1.2 Information We Collect Automatically</h2>
        <ul>
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Usage data (features used, time spent in app, scan frequency)</li>
          <li>Technical data (IP address, browser type, app version)</li>
          <li>Performance and crash data</li>
        </ul>

        <h2>1.3 Camera and Storage Access</h2>
        <p>Our app requires access to your device's camera and storage to:</p>
        <ul>
          <li>Capture documents and images for scanning</li>
          <li>Save processed documents to your device</li>
          <li>Access previously saved documents for editing</li>
        </ul>
      </div>

      <div className="section" id="how-we-use-information">
        <h1>2. How We Use Information</h1>
        
        <h2>2.1 Primary Purposes</h2>
        <ul>
          <li>Provide scanning and document processing services</li>
          <li>Improve app functionality and user experience</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Send important updates and notifications</li>
        </ul>

        <h2>2.2 Analytics and Improvement</h2>
        <ul>
          <li>Analyze usage patterns to improve our services</li>
          <li>Develop new features based on user needs</li>
          <li>Monitor app performance and fix technical issues</li>
          <li>Conduct research and development</li>
        </ul>
      </div>

      <div className="section" id="information-sharing">
        <h1>3. Information Sharing</h1>
        
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
        
        <h2>3.1 Service Providers</h2>
        <p>We may share information with trusted third-party service providers who assist us in:</p>
        <ul>
          <li>Cloud storage and data processing</li>
          <li>Analytics and performance monitoring</li>
          <li>Customer support services</li>
        </ul>

        <h2>3.2 Legal Requirements</h2>
        <p>We may disclose information when required by law or to:</p>
        <ul>
          <li>Comply with legal processes or government requests</li>
          <li>Protect our rights, property, or safety</li>
          <li>Prevent fraud or security issues</li>
          <li>Protect the rights and safety of our users</li>
        </ul>

        <div className="highlight">
          <strong>Important:</strong> Your scanned documents and images are processed locally on your device whenever possible and are not transmitted to our servers unless you explicitly choose to sync or backup your data.
        </div>
      </div>

      <div className="section" id="data-security">
        <h1>4. Data Security</h1>
        
        <h2>4.1 Security Measures</h2>
        <p>We implement appropriate technical and organizational measures to protect your information:</p>
        <ul>
          <li>End-to-end encryption for data transmission</li>
          <li>Secure data storage with access controls</li>
          <li>Regular security audits and updates</li>
          <li>Employee training on data protection</li>
        </ul>

        <h2>4.2 Data Retention</h2>
        <ul>
          <li>Account information: Retained while your account is active</li>
          <li>Usage data: Retained for up to 2 years for analytics</li>
          <li>Scanned documents: Stored locally on your device or in your chosen cloud storage</li>
          <li>Support communications: Retained for up to 3 years</li>
        </ul>
      </div>

      <div className="section" id="your-rights">
        <h1>5. Your Rights</h1>
        
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        
        <h2>5.1 Access and Control</h2>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Delete your account and associated data</li>
          <li>Export your data in a portable format</li>
        </ul>

        <h2>5.2 Communication Preferences</h2>
        <ul>
          <li>Opt-out of marketing communications</li>
          <li>Manage notification settings</li>
          <li>Control data sharing preferences</li>
        </ul>

        <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
      </div>

      <div className="section" id="childrens-privacy">
        <h1>6. Children's Privacy</h1>
        
        <p>Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete such information.</p>
        
        <p>For users between 13-18 years old, we recommend parental supervision and consent before using our services.</p>
      </div>

      <div className="section" id="changes-to-policy">
        <h1>7. Changes to This Privacy Policy</h1>
        
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
        <ul>
          <li>Posting the new Privacy Policy in the app</li>
          <li>Sending you an email notification (if you have provided an email address)</li>
          <li>Displaying a prominent notice in the app</li>
        </ul>
        
        <p>Your continued use of the app after any changes constitutes acceptance of the updated Privacy Policy.</p>
      </div>

      <div className="section" id="contact-us">
        <h1>8. Contact Us</h1>
        
        <div className="contact-info">
          <h3>Privacy Questions and Concerns</h3>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@scannecto.com" className="email-link">privacy@scannecto.com</a></li>
            <li><strong>Support:</strong> <a href="mailto:support@scannecto.com" className="email-link">support@scannecto.com</a></li>
            <li><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours</li>
          </ul>
        </div>

        <h2>Data Protection Officer</h2>
        <p>For users in the European Union, you can contact our Data Protection Officer at:</p>
        <p><strong>Email:</strong> <a href="mailto:dpo@scannecto.com" className="email-link">dpo@scannecto.com</a></p>
      </div>

      <div className="back-to-top">
        <a href="#top">↑ Back to Top</a>
      </div>
    </div>
  );
};

export default RootPage;
