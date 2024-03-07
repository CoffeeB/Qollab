import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import { useRouter } from 'next/router';
import ContentHead from '@/components/general/ContentHead';
import { Button } from '@/components/general/Button';
import VerificationCodeForm from '@/components/login/verificationCodeForm';
import showCustomStyledAlert from '@/utils/sweetAlert2';

export default function ResetPassword() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [showVerificationForm, setShowVerificationForm] = useState(false);

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailSubmit = () => {
        // Validate email here if needed
        if (!validateEmail(email)) {
            // Show error message if email is not valid
            showCustomStyledAlert('Invalid Email', 'Please enter a valid email address', 'error');
            return; // Exit the function early if email is invalid
        }
    
        setShowVerificationForm(true);
    };

    return (
        <>
            <div className='head-container'>
                <Header />
            </div>
            <section className="row align-contents-center justify-content-center py-5">
                <div className="row">
                    <div className="row justify-content-center rounded-3 col-12 pt-7 g-0">
                        <div className="col-6">
                            <div className="z-1 my-lg-5">
                                <div className="content-text text-center">
                                    <ContentHead text={'Reset Password'} className={'fs-1 fw-bold'}/>
                                </div>
                                {!showVerificationForm && (
                                    <div className='px-8'>
                                        <div>
                                            <div className="row">
                                                <p className='text-grey col-10 fs-4'>Enter the email address you used when you joined and we'll send a link to the email address</p>
                                                <form className='col-12 px-3 my-2'>
                                                    <div className='px-0 border-bottom d-grid fs-4  cursor-pointer justify-content-between align-items-center border-white border-1'>
                                                        <label htmlFor='email' className='p-0 mt-2 mb-4'>Email Address</label>
                                                        <input
                                                            id='email'
                                                            type='email'
                                                            className="d-flex form-control border-0 text-grey p-0 pb-1 w-100 rounded-2 fs-4 border"
                                                            placeholder='Email'
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </form>
                                                <div className="w-100 my-3">
                                                    <Button text={'Submit'} performAction={handleEmailSubmit} className='fw-bold fs-4 w-100 rounded-2 btn-white ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {showVerificationForm && <VerificationCodeForm email={email} onSuccess={() => { /* Handle success */ }} />} {/* Pass email and handle success callback */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
