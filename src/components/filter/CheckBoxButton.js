// CheckboxButton.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CheckboxButton = ({ label, value, onInputChange, initialChecked, selectedValue }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  useEffect(() => {
    setIsChecked(selectedValue === value);
  }, [selectedValue, value]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    
  };

  return (
    <label style={{
      display: 'inline-block',
      padding: '14px 16px',
      border: `2px solid ${isChecked ? '#ff3131' : '#ff3131'}`,
      background: isChecked ? '#ff3131' : 'inherit',
      color: isChecked ? '#fff' : '#fff',
      cursor: 'pointer',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      width: '100%',
      margin: '8px',
    }}
      htmlFor={`checkbox-${value}`}
    >
      <input
        id={`checkbox-${value}`}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ display: 'none' }}
      />
      {label}
    </label>
  );
};

CheckboxButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  selectedValue: PropTypes.string,
  initialChecked: PropTypes.bool,
};

export default CheckboxButton;
