import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    label, 
    onClick, 
    type = 'button', 
    className = '', 
    disabled = false, 
    bgColor = 'bg-green-200', 
    hoverColor = 'hover:bg-blue-600' 
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 text-white font-semibold rounded-lg shadow-md 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    disabled:opacity-50 disabled:cursor-not-allowed 
                                    ${bgColor} ${hoverColor} ${className}`}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired, // Text on the button
    onClick: PropTypes.func, // Click handler
    type: PropTypes.oneOf(['button', 'submit', 'reset']), // Button type
    className: PropTypes.string, // Additional Tailwind classes
    disabled: PropTypes.bool, // Disabled state
    bgColor: PropTypes.string, // Background color class
    hoverColor: PropTypes.string, // Hover background color class
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    className: '',
    disabled: false,
    bgColor: 'bg-blue-500', // Default background color
    hoverColor: 'hover:bg-blue-600', // Default hover color
};

export default Button;
