import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function PageHeader({ text }) {
  return (
    <div className='border-1 border-grey border-bottom bg-black-2 mt-lg-6 pt-lg-4 mt-sm-0 pt-sm-0'>
        <div className='w-100'>
            <p className='text-danger fs-3 pb-0 m-0 fw-bold'>{text}</p>
        </div>
    </div>
  );
}

// Add prop type validation for the 'text' prop
PageHeader.propTypes = {
  text: PropTypes.string.isRequired
};
