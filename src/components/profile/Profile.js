import React, { useState } from 'react'
import ProfileUpperSect from '@/components/profile/ProfileUpperSect'
import { Button } from '@/components/general/Button'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileSettings from '@/components/profile/ProfileSettings'
import ProfileEdit from '@/components/profile/ProfileEdit'

export default function Profile({ targetRef }) {
    const [activeStep, setActiveStep] = useState('details');
    const [premiumMember, setPremiumMember] = useState(false);

    const handleStepChange = (step) => {
        setActiveStep(step);
    }
    
    const isPremiumMember = () => {
        const userIsPremium = true;
        setPremiumMember(userIsPremium);
    }
    
  return (
    <>
        {activeStep === 'edit' && <ProfileEdit handleStepChange={handleStepChange} />}
        {(activeStep === 'details' || activeStep === 'settings') && 
        (<div className="row pt-lg-5 mt-lg-3 pt-sm-0 mt-sm-0 overflow-y-sm-hidden pb-0 vh-lg-100">
            <div className="card border-0 border-grey rounded-0 col-lg-4 p-0 pe-0 border-end h-lg-100 h-md-75 ps-lg-3 pt-lg-3 pt-sm-2">
                <div className="card-common overflow-y-scroll mh-100 h-100">
                    <div className="card-body pt-lg-5 pt-sm-2">
                        <div className="d-flex flex-column justify-content-between">
                            <ProfileUpperSect premiumMember={premiumMember}/>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <span className="fw-bold">
                                        <span>John</span>, <span>Doe</span>
                                    </span>
                                    <span className="text-grey d-flex align-items-center">
                                        <i className="bx bxs-map display-7" />
                                        <span>Abuja</span>, <span>Nigeria</span>
                                    </span>
                                </div>
                                <div className="d-flex mt-4 flex-column align-items-center justify-content-center">
                                    <a
                                        className={`btn d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border ${ activeStep === 'details' ? 'active' : ''}`}
                                        onClick={() => handleStepChange('details')}
                                    >
                                        <i className="bx bxs-user display-7 text-light"></i>
                                        <span>Profile Details</span>
                                    </a>
                                    <a
                                        className={`btn d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border ${ activeStep === 'settings' ? 'active' : ''}`}
                                        onClick={() => handleStepChange('settings')}
                                    >
                                        <i className="bx bx-cog display-7 me-3 text-light"></i>
                                        <span>Settings</span>
                                    </a>
                                    <a
                                        className={`d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border`}
                                        onClick={() => handleStepChange('edit')}
                                    >
                                        <i className="bx bxs-pencil display-7 me-2 text-light"></i>
                                        <span>Edit Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 rounded-0 col-lg-8 p-0 px-2 pt-3  overflow-x-hidden h-lg-100">
                {activeStep === 'details' && <ProfileDetails />}
                {activeStep === 'settings' && <ProfileSettings />}
            </div>
        </div>)
        }
    </>
  )
}
