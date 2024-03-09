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
            <section className=" row mx-auto  py-5">
                    <div className="row justify-content-center rounded-3 pt-7 g-0">
                        <div className="col-md-6 mx-auto">
                            <div className="row">
                                
                                {/* <div className="content-text text-center">
                                    <ContentHead text={'Reset Password'} className={'fs-1 fw-bold'}/>
                                </div> */}
                                {!showVerificationForm ? (
                                   
                                    <div className="row ms-2">
                                        <p className='text-light col-10 fs-base'>Enter the email address you used when you joined and we'll send a link to the email address</p>
                                        <form className='col-md-12 px-3 my-2'>
                                            <div className='px-0 d-grid fs-4  cursor-pointer  border-white border-1'>
                                                <label htmlFor='email' className='p-0 mt-2 mb-2'>Email Address</label>
                                                <input
                                                    id='email'
                                                    type='email'
                                                    className="form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 "
                                                    placeholder='Email'
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </form>
                                        <div className="w-100 my-3">
                                            <button onClick={() => handleEmailSubmit()} className='btn btn-primary fw-bold fs-4 w-100 rounded-2 btn-white '>Submit</button>
                                        </div>
                                    </div>
                                        
                                ): (
                                <>
                                <div className="col-12 mx-auto">
                                    <VerificationCodeForm 
                                        email={email} 
                                        onSuccess={() => { /* Handle success */ }} 
                                    /> 
                                </div>
                                </>
                                )}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}
