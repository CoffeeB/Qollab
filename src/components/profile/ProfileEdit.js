import React, {useState} from 'react'
import EditUpper from './EditUpper'
import EditableField from './EdditableField'

export default function ProfileEdit({ handleStepChange }) {
    const [formData] = useState( new FormData())
    const [editField, setShowEditField] = useState(false);
    const [userProfile, setUserProfile] = useState({ 
        name: '',
        phone_number: '',
        image: '',
        age: '' 
    });

    const openEditField = () => {
        let editSection = document.querySelector('#editableField');
        editSection.classList.remove('d-none')
    }

    const closeEditField = () => {
        let editSection = document.querySelector('#editableField');
        editSection.classList.add('d-none')
    }

    
    const handleFieldUpdate = (fieldName, newValue) => {
        let isValueChanged = userProfile[fieldName] !== newValue;
        if (isValueChanged) {
            formData.set(fieldName, newValue);
            setTimeout(() => { 
                alert(JSON.stringify(formData));
            }, 10000);
        }
    }

  return (
    <div className="row pt-lg-5 mt-lg-3 overflow-auto vh-100">
        <div className="card border-0 border-grey rounded-0 col-lg-4 col-md-6 col-sm-12 me-0 p-2 pt-0 pe-0 border-end">
            <div className="card-common">
                <div className="card-body">
                    <div className="d-flex flex-column justify-content-center">
                        <EditUpper handleStepChange={handleStepChange}/>
                        <div className="d-flex flex-column">
                            <div className=' border-grey border-bottom border-2 '>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">
                                        <h4 className='text-white'>Full Name</h4>
                                    </span>
                                    <span className="text-grey">
                                        <span>John Doe</span>
                                    </span>
                                </div>
                                <div className="d-flex mb-3 mt-4 flex-column">
                                    <span className="fw-bold d-flex align-items-center justify-content-between">
                                        <h4 className='text-white mb-0'>Contact info</h4>
                                        <i className='cursor-pointer bx bxs-pencil display-7'  onClick={openEditField}/>
                                    </span>
                                    <span className="d-flex align-items-center w-100">
                                        <div className='d-flex justify-content-between w-85'>
                                            <span className='d-grid justify-content-between'>
                                                <span className='text-danger'>Phone Number:</span>
                                                <span className='text-danger'>Whatsapp Number:</span>
                                                <span className='text-danger'>Email:</span>
                                            </span>
                                            <span className='d-grid justify-content-between'>
                                                <span className='text-danger'>08033445234</span>
                                                <span className='text-danger'>08033445234</span>
                                                <span className='text-danger'>Jane@gmail.com</span>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card border-0 d-none overflow-auto rounded-0 col-lg-8 col-md-6 col-sm-12 p-2 pt-0 ps-0 vh-100" id='editableField'>
            <div className="card-body">
                <div className="p-md-4 w-100">
                    <div className="d-flex flex-column justify-content-between">
                        <a className='m-0 mb-4 text-danger d-flex justify-content-end fs-4 fw-bold' onClick={closeEditField}>Done</a>
                        <div className='col-12 px-3'>
                            {Object.entries(userProfile).map(([
                                    field, value]) => 
                                    <div key={field} className='col-12'>
                                        <EditableField label={field
                                            .split('_')
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} value={value} 
                                            onUpdate={(newValue) => {
                                                handleFieldUpdate(field,newValue);
                                            }}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
