import React from 'react';

function PrivacyPolicy() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#005c66', color: '#ffffff', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>
          Privacy Policy
        </h2>

        <p>Your privacy is very important to us. When you visit our website and purchase our eBook, we are committed to protecting your personal information.</p>

        <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Information We Collect</h3>
        <p>We collect necessary information such as your name, email address, and payment details to process your purchase smoothly.</p>

        <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>How We Use Your Information</h3>
        <p>Your information is used only to process your order, send you the receipt, and provide customer support. We do not share your personal details with any third parties without your consent.</p>

        <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Cookies</h3>
        <p>Our website uses cookies to enhance your browsing experience. These cookies help us understand your preferences and improve your experience.</p>

        <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Data Security</h3>
        <p>We take appropriate technical and organizational measures to keep your information safe and secure from unauthorized access or disclosure.</p>

        <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Contact Us</h3>
        <p>If you have any questions or concerns about your personal information, please contact us at <a href="mailto:youremail@example.com" style={{ color: '#ffd700', textDecoration: 'underline' }}>youremail@example.com</a>.</p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;

