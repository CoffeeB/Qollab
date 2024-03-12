import React from 'react'; // Import React when using JSX
import PropTypes from 'prop-types';

const ContentHead = ({ text, otherText, className }) => {
    return (
        <p className={`${className}`}>
            {text}<span className='customized-text'>{otherText}</span>
        </p>
    );
};

ContentHead.propTypes = {
    text: PropTypes.string.isRequired,
    otherText: PropTypes.string, // Add prop type validation for otherText
    className: PropTypes.string // Add prop type validation for className
};

export default ContentHead;
