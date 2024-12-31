import React from 'react';

const Stickyheader = ({ links }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="sticky top-0 bg-white shadow-md z-50 flex justify-between px-4 py-3"
      style={{ backgroundColor: '#F6F4FB' }}
    >
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-blue-600 hover:underline"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default Stickyheader;
