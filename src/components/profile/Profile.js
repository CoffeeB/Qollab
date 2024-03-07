import React, {useState} from 'react'
import ProfileUpperSect from '@/components/profile/ProfileUpperSect'
import { Button } from '@/components/general/Button'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileSettings from '@/components/profile/ProfileSettings'
import ProfileEdit from '@/components/profile/ProfileEdit'

export default function Profile() {
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
        (<div className="row pt-5 mt-3">
            <div className="card border-0 border-grey overflow-hidden rounded-0 col-4 p-0 pe-0 border-end contain-info">
                <div className="card-common">
                    <div className="card-body">
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
                                    <Button
                                        className={`d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border ${ activeStep === 'details' ? 'active' : ''}`}
                                        text={<>
                                            <i className="bx bxs-user display-7 text-light"></i> Profile Details
                                        </>} 
                                        performAction={() => handleStepChange('details')}
                                    />
                                    <Button
                                        className={ `d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border ${ activeStep === 'settings' ? 'active' : ''}`}
                                        text={<>
                                            <i className="bx bx-cog display-7 me-3 text-light"></i> Settings
                                        </>} 
                                        performAction={() => handleStepChange('settings')}
                                    />
                                    <Button
                                        className={`d-flex btn-s bg-transparent my-2 pe-7 p-4 w-75 text-center align-items-center justify-content-evenly text-danger rounded-2 fs-5 border`}
                                        text={<>
                                            <i className="bx bxs-user display-7 me-2 text-light"></i> Edit Profile
                                        </>}
                                        performAction={() => handleStepChange('edit')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 rounded-0 col-8 p-0 ps-0 overflow-x-hidden contain-info">
                {activeStep === 'details' && <ProfileDetails />}
                {activeStep === 'settings' && <ProfileSettings />}
            </div>
        </div>)
        }
    </>
  )
}
