import React from 'react';

const InfoCard = ({ imageSrc, text, backgroundColor = "#2F2F31", textColor = "#899797", className = '' }) => {
  return (
    <div
      style={{ backgroundColor }}
      className={`w-auto rounded-xl gap-2 flex items-center px-[5px] py-[1.5px] ${className}`}
    >
      <img src={imageSrc} alt="" />
      <p style={{ color: textColor }} className="text-[12px] font-semibold">
        {text}
      </p>
    </div>
  );
};

export default InfoCard;
