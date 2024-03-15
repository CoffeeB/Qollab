import React, { useState } from 'react';
import Logo from '../general/Logo';

const PersonalForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initial form data state
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        otherGender: '',
        sexualOrientation: '',
        religion: '',
        profilePicture: '',
        mobileNumber: '',
        whatsappNumber: '',
        address: '',
        addressCountry: '',
        addressState: '',
        nationality: '',
        stateOfOrigin: '',
        lga: '',
        city: '',
        currentLocation: '',
        dateOfBirth: ''
    });

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    // Define form sections and their respective field sets
    const formSections = [
        { step: 1, title: 'Identity Information', fields: ['Title', 'First Name', 'Middle Name', 'Last Name', 'Gender'] },
        { step: 2, title: 'Personal Details', fields: ['Date of Birth', 'Sexual Orientation', 'Religion'] },
        { step: 3, title: 'Contact Information', fields: ['Mobile Number', 'Whatsapp Number', 'Address', 'Country', 'State', 'City'] },
        { step: 4, title: 'Additional Information', fields: ['Nationality', 'State of Origin', 'L.G.A'] }
    ];

    // Define options for Title and Gender fields
    const fieldOptions = {
        Title: ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'],
        Gender: ['Male', 'Female']
    };

    return (
        <div className='row justify-content-center p-5 pt-10'>
            <form className='col-lg-6 p-5 shadow rounded-3 bg-light' onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center p-5 pt-0'>
                    <div className='border-danger border border-1 rounded-circle p-3'>
                        <Logo />
                    </div>
                </div>
                <div className="mb-4">
                    {/* Render breadcrumbs */}
                    {formSections.slice(0, currentStep).map((section, index) => (
                        <span className='fs-6 text-secondary' key={section.step}>
                            {index !== 0 && <span> {'>'} </span>}
                            {index + 1 === currentStep ? <strong className='fs-5'>{section.title}</strong> : <span>{section.title}</span>}
                        </span>
                    ))}
                </div>
                <h5>{formSections[currentStep - 1].title}</h5>
                <div className='row'>
                    {formSections[currentStep - 1].fields.map((fieldName) => (
                        <div className='col-md-6 mt-3' key={fieldName}>
                            <label className='text-light' htmlFor={fieldName}>{fieldName}: </label>
                            {fieldName === 'Gender' || fieldName === 'Title' ? (
                                formData[fieldName] !== 'other' ? (
                                    <select
                                        className='form-control border-light'
                                        id={fieldName}
                                        name={fieldName}
                                        value={formData[fieldName]}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        {fieldOptions[fieldName].map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        <option value="other">Other</option>
                                    </select>
                                ) : (
                                    <input
                                        className='form-control border-light'
                                        type="text"
                                        id={`other${fieldName}`}
                                        name={`other${fieldName}`}
                                        placeholder={`Specify Other ${fieldName}`}
                                        value={formData[`other${fieldName}`]}
                                        onChange={handleChange}
                                    />
                                )
                            ) : (
                                <input
                                    className='form-control border-light'
                                    type="text"
                                    id={fieldName}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className='row justify-content-between mt-4 mx-md-1'>
                    {currentStep !== 1 && <button type="button" className="btn btn-outline-danger border-1 border rounded-1" onClick={handlePrevStep}>Previous</button>}
                    {currentStep !== formSections.length && <button type="button" className="btn rounded-1" onClick={handleNextStep}>Next</button>}
                    {currentStep === formSections.length && <button type="submit" className="btn rounded-1">Submit</button>}
                </div>
            </form>
        </div>
    );
};

export default PersonalForm;
