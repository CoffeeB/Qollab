import { useState } from 'react';
import React from 'react';
import CheckboxButton from '@/components/filter/CheckBoxButton';

const Filters = ({ filters }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (e, filterId) => {
        const { value, checked, type } = e.target;
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterId]: type === 'checkbox' ? (checked ? value : '') : value
        }));
    };

    const renderFilterInput = (filter) => {
        switch (filter.type) {
            case "dropdown":
                return (
                    <select
                        className='form-select border-1 border-danger text-light rounded-2'
                        data-bs-theme="dark"
                        id={`filter-${filter.id}`}
                        value={selectedFilters[filter.id] || ''}
                        onChange={(e) => handleFilterChange(e, filter.id)}
                    >
                        <option value="">Select</option>
                         
                        {filter.label == 'Age' ? 
                            (filter.options.map((option, index) => (
                            <option key={index} value={`${option.min}-${option.max}`}>{`${option.min} - ${option.max}`}</option>
                            ))) : (
                            filter.options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            )))
                        }
                    </select>
                );
            case "checkbox":
                return (
                    <div>
                        {filter.options.map((option, index) => (
                            <div key={index} className="form-check form-check-inline">
                                <CheckboxButton
                                    key={index}
                                    label={option}
                                    value={option}
                                    initialChecked={selectedFilters[filter.id] === option}
                                    selectedValue={selectedFilters[filter.id]}
                                />
                            </div>
                        ))}
                    </div>
                );
            case "radio":
                return (
                    <div className='d-grid justify-items-start'>
                        {filter.options.map((option, index) => (
                            <div className='d-flex align-items-center' key={index}>
                                <input
                                    className='form-check-input form-control'
                                    type="radio"
                                    id={`filter-${filter.id}-${index}`}
                                    name={`filter-${filter.id}`}
                                    value={option}
                                    onChange={(e) => handleFilterChange(e, filter.id)}
                                    checked={selectedFilters[filter.id] === option}
                                />
                                <label htmlFor={`filter-${filter.id}-${index}`} className='mb-0 mx-2 fs-6 p-0'>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='filters-container min-vh-70 vh-70 mh-100 overflow-auto d-grid justify-content-center align-items-center'>
            {filters.map((filter) => (
                <div className='d-grid my-2' key={filter.id}>
                    <label className='mb-2 fs-5 text-light content-text text-start' htmlFor={`filter-${filter.id}`}>{filter.label}</label>
                    {renderFilterInput(filter)}
                </div>
            ))}
        </div>
    );
};

export default Filters;
