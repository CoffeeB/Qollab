import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditableField = ({ label, value, options, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedValue(value); // Reset edited value to original value
  };

  const handleUpdateClick = () => {
    onUpdate(editedValue);
    setIsEditing(false);
  };

  return (
    <div className="mb-3">
      <div className="row justify-content-between align-items-center mb-2 border-2 border-bottom border-light py-2">
        <div className="col-10">
          <label className="me-2 text-light">{label}:</label>
        </div>
        <div className="col-2">
          {!isEditing ? (
            <button
              className="text-light rounded-3 bg-transparent border-1 border border-danger btn-sm"
              onClick={handleEditClick}
              aria-label={`Edit ${label}`}
            >
              <i className="bx bx-pencil display-7"></i>
            </button>
          ) : (
            <button
              className="text-danger rounded-3 bg-transparent border-1 border border-danger btn-sm"
              onClick={handleCancelClick}
              aria-label={`Cancel ${label} edit`}
            >
              <i className="bx bx-x fs-lg"></i>
            </button>
          )}
        </div>

        {isEditing ? (
          <>
            <div className="col-10">
              {options ? (
                <select
                  className="form-select"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  aria-label={`Select ${label}`}
                  placeholder={`Select ${label}`}
                >
                  <option value="" disabled>Select {label}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="form-control"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  aria-label={`Edit ${label}`}
                  placeholder={`Enter ${label}`}
                />
              )}
            </div>
            <div className="col-2">
              <button
                className="text-light hover-danger rounded-3 bg-transparent border-1 border border-success btn-sm"
                onClick={handleUpdateClick}
                aria-label={`Update ${label}`}
              >
                <i className="bx bx-check fs-lg"></i>
              </button>
            </div>
          </>
        ) : (
          <span className={`text-light ${value ? 'py-1' : 'py-3'}`} aria-label={`Current ${label} value`}>
            {value ? value : 'NIL'}
          </span>
        )}
      </div>
    </div>
  );
};

EditableField.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default EditableField;
