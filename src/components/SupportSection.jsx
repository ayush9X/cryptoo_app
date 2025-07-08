import React from 'react';
import './SupportSection.css';
import { FaHeadphonesAlt, FaUserShield, FaDownload, FaBook, FaUndo, FaUserFriends } from 'react-icons/fa';

const features = [
  {
    icon: <FaDownload />,
    title: "Easy Installation Files",
    desc: "Digital Currency Investor EA comes with a point-and-click installation wizard. Just double-click the wizard, and let it do the rest!",
  },
  {
    icon: <FaUserShield />,
    title: "Access to Members-Only Area",
    desc: "Access all files, tutorials, and documentation from our exclusive member area after payment.",
  },
  {
    icon: <FaHeadphonesAlt />,
    title: "24/7 Support",
    desc: "Our team of specialists is available 24/7 to assist with any queries you may have.",
  },
  {
    icon: <FaBook />,
    title: "Detailed Quick Start Guide",
    desc: "Step-by-step instructions to help you use Digital Currency Investor EA with best practices.",
  },

];

function SupportSection() {
  return (
    <section className="support-section">
      <div className="support-header">
        <h2><span className="highlight">SUPPORT</span> YOU NEED</h2>
        <p>We've made it easy for you to get the support you need. As a Digital Currency Investor EA member, you will get:</p>
      </div>
      <div className="support-grid">
        {features.map((item, index) => (
          <div key={index} className="support-item">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SupportSection;
