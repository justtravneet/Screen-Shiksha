import React from 'react';

const Btn = ({
  label,
  onClick,
  className = '',
  type = 'button',
  outline = false,
 
  borderRadius = 'rounded', // Default border radius
  textSize = 'text-base', // Default text size
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${borderRadius} ${textSize} ${
        outline
          ? 'bg-black text-white'
          : 'bg-transparent outline outline-2'
      } hover:bg-white hover:text-black hover:outline hover:outline-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default Btn;
