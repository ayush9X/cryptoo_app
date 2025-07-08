import React from 'react';

const ReturnRefundPolicy = () => (
  <section style={{ padding: '60px 20px', backgroundColor: '#005c66', color: 'white', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>
        Return & Refund Policy
      </h2>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>All Sales Are Final</h3>
      <p>
        Please note that all purchases are final. We do not offer refunds once the product is purchased and delivered.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Technical Issues</h3>
      <p>
        If you encounter any technical issues with the product or during the transaction process, please reach out to our support team. We will do our best to resolve the issue promptly.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Exceptional Circumstances</h3>
      <p>
        Refund requests will only be considered under exceptional circumstances and are granted solely at our discretion.
      </p>

      <h3 style={{ marginTop: '30px', fontSize: '1.5rem' }}>Contact Support</h3>
      <p>
        If you believe you qualify for a refund or need assistance, contact us at <a href="mailto:support@example.com" style={{ color: '#ffd700', textDecoration: 'underline' }}>support@example.com</a>.
      </p>
    </div>
  </section>
);

export default ReturnRefundPolicy;
