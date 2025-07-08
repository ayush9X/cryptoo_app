import React from 'react';

const TermsOfService = () => (
  <section style={{ padding: '60px 20px', backgroundColor: '#005c66', color: 'white', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>
        Terms of Service
      </h2>

      <p>
        By accessing our website and using our services, you agree to comply with our terms and all applicable laws and regulations. If you do not agree, please do not use our services.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Modifications</h3>
      <p>
        We reserve the right to modify these terms at any time without prior notice. Continued use of the site after changes means you accept the revised terms.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Intellectual Property</h3>
      <p>
        All content on this site, including text, graphics, and logos, is the property of our company and protected by copyright laws. You may not reproduce or distribute any material without written permission.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Limitation of Liability</h3>
      <p>
        We are not liable for any damages or losses resulting from your use of our services. All content is provided "as is" without warranties of any kind.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Contact</h3>
      <p>
        For any questions about these Terms of Service, please contact us at <a href="mailto:youremail@example.com" style={{ color: '#ffd700', textDecoration: 'underline' }}>youremail@example.com</a>.
      </p>
    </div>
  </section>
);

export default TermsOfService;
