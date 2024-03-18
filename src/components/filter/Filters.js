import { useState } from 'react';
import { useRouter } from 'next/router';
import CheckboxButton from '@/components/filter/CheckBoxButton';

const Filters = ({ filters }) => {
    const [selectedFilters, setSelectedFilters] = useState({});
    const router = useRouter();

    const handleFilterChange = (e, filterId) => {
        const { value, checked, type } = e.target;
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterId]: type === 'checkbox' ? (checked ? value : '') : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append selected filters to formData
        Object.entries(selectedFilters).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            // Send formData to backend API
            const response = await fetch('/api/save-filters', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                // Redirect to index page
                router.push('/');
            } else {
                // Handle error
                console.error('Failed to save filters');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                         
                        {filter.label == 'Age' || filter.label == 'Height' ? 
                            (filter.options.map((option, index) => (
                            <option key={index} value={`${option.min}-${option.max}`}>{`${option.min} - ${option.max} ${filter.label === 'Height' ? 'ft' : 'years'}`}</option>
                            ))) : (
                            filter.options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            )))
                        }
                    </select>
                );
            case "checkbox":
                return (
                    <div className='col-12'>
                        {filter.options.map((option, index) => (
                            <div key={index} className="form-check form-check-inline mw-50">
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
        <form className='filters-container vh-85 mh-100 overflow-auto d-grid justify-content-center align-items-center pb-5 px-2'>
            {filters.map((filter) => (
                <div className='d-grid my-2' key={filter.id}>
                    <label className='mb-2 fs-5 text-light content-text text-start' htmlFor={`filter-${filter.id}`}>{filter.label}</label>
                    {renderFilterInput(filter)}
                </div>
            ))}
            <div className="clearfix mt-3">
                <div className="input-group mb-0">
                    <button className="input-group-text bg-danger py-2 cursor-pointer rounded-4 w-50 fw-bold">APPLY</button>
                </div>
            </div>
        </form>
    );
};

export default Filters;
