import React from 'react';

const Button = ({ label, onClick, className = '', type = 'button', outline = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 ${
        outline
          ? 'bg-transparent  outline outline-2 '
          : 'bg-blue-500 text-white'
      } rounded hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
