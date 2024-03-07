import React from 'react'; // Import React when using JSX
import PropTypes from 'prop-types';

const Radio = ({ id, name, value, checked, onChange, label }) => {
    return (
        <div>
            <input
                type='radio'
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired // Add prop type validation for label
};

export default Radio;
