import React from 'react'; // Import React when using JSX
import PropTypes from 'prop-types';

const Button = ({ type, text, className, bgColor, performAction }) => {
    return <button type={type} onClick={performAction} style={{ backgroundColor: bgColor }} className={`btn ${className}`}>{text}</button>;
};

const LoginButton = ({ text, className, bgColor, performAction }) => {
    return <button onClick={performAction} style={{ backgroundColor: bgColor }} className={`btn login-btn ${className}`}>{text}</button>;
};

const CollapseButton = ({ className, text, dataBsTarget, dataBsToggle, ariaExpanded, ariaControls, performAction }) => {
    return (
        <button
            className={className}
            type="button"
            data-bs-target={dataBsTarget}
            data-bs-toggle={dataBsToggle}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            onClick={performAction}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string, // Add prop type validation for className
    performAction: PropTypes.func.isRequired
};

LoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    className: PropTypes.string, // Add prop type validation for className
    performAction: PropTypes.func.isRequired
};

CollapseButton.propTypes = {
    text: PropTypes.string.isRequired,
    dataBsToggle: PropTypes.string,
    dataBsTarget: PropTypes.string,
    ariaExpanded: PropTypes.string,
    ariaControls: PropTypes.string,
    className: PropTypes.string, // Add prop type validation for className
    performAction: PropTypes.func.isRequired
};

export { Button, LoginButton, CollapseButton };
