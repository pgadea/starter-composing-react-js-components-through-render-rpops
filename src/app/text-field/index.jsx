import React from 'react';
import PropTypes from "prop-types";

export default function TextField({ 
    placeholder, 
    type = "text",
    value, 
    onChange,
 }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf("text", "password", "email", "number").isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
