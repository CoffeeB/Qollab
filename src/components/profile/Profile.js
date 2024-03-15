import React, {useState, useRef, useEffect} from 'react'
import ProfileUpperSect from '@/components/profile/ProfileUpperSect'
import { Button } from '@/components/general/Button'
import ProfileDetails from '@/components/profile/ProfileDetails'
import ProfileSettings from '@/components/profile/ProfileSettings'
import ProfileEdit from '@/components/profile/ProfileEdit'

export default function Profile() {
    const [activeStep, setActiveStep] = useState('details');
    const [premiumMember, setPremiumMember] = useState(false);
    const detailsRef = useRef(null);
    const settingsRef = useRef(null);

    useEffect(() => {
        if (activeStep === 'details' && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (activeStep === 'settings' && settingsRef.current) {
            settingsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeStep]);


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
            <div className="card border-0 border-grey rounded-0 col-lg-4 p-0 pe-0 border-end h-lg-100 h-md-75">
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
                                            <i className="bx bxs-pencil display-7 me-2 text-light"></i> Edit Profile
                                        </>}
                                        performAction={() => handleStepChange('edit')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 rounded-0 col-lg-8 p-0 ps-0 overflow-x-hidden h-lg-100">
                {activeStep === 'details' && <ProfileDetails ref={detailsRef}/>}
                {activeStep === 'settings' && <ProfileSettings ref={settingsRef}/>}
            </div>
        </div>)
        }
    </>
  )
}
