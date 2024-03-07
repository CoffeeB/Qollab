import React, { useState } from 'react';
import { Button } from '@/components/general/Button';
import { useRouter } from 'next/router';
import Header from '@/components/landing/Header';
import ContentHead from '@/components/general/ContentHead';
import ResetPassword from '@/components/login/ResetPassword';
import login from '@/utils/login';
import showCustomStyledAlert from '@/utils/sweetAlert2';

export default function LoginPage() {
    const [showResetPassword, setShowResetPassword] = useState(false);
    const router = useRouter();

    const redirectToHome = () => {
        router.push('/home');
    };

    const handleForgotPassword = () => {
        setShowResetPassword(true);
    };

    const redirectToSignup = () => {
        router.push('/');
    };

    const handleLogin = async () => {
        const email = document.getElementById('email').value; // Get email value from input field
        const password = document.getElementById('password').value; // Get password value from input field
        
        try {
            // Call the login function with the email and password
            await login({ email, password }, redirectToHome);
        } catch (error) {
            // Handle login error
            console.error('Login Error:', error);
            // Display error message using Sweet Alert
            showCustomStyledAlert('Login Error', error.message || 'An unexpected error occurred. Please try again later.', 'error', {
                customClass: {
                    container: 'container',
                    popup: 'bg-darkgray',
                    title: 'title',
                    content: 'text-center',
                    confirmButton: 'btn btn-outline-success bg-green rounded-pill',
                    cancelButton: 'btn btn-danger',
                },
            });
        }
    };

    return (
        <>
            {!showResetPassword && (
            <>
                <div className='head-container'>
                    <Header />
                </div>
                <section className="row justify-content-center py-2">
                    <div className="row">
                        <div className="row rounded-3 pt-5 g-0">
                            <div className='col-lg-7'>
                                
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="z-1 my-lg-5">
                                    <div className="content-text text-center">
                                        <ContentHead text={'Welcome to Relationships by '} otherText={'reasns'} className={'fs-3 fw-bold'}/>
                                    </div>
                                    <div className='col-lg-12 px-8'>
                                        <div>
                                            <div className="row">
                                                <p className='text-danger fs-2 fw-bold'>Login</p>
                                                <form className='col-12 px-3 my-2'>
                                                    <div className='px-0 border-bottom fs-4  cursor-pointer justify-content-between align-items-center border-white border-1'>
                                                        <label htmlFor='email' className='p-0 mt-2 mb-4'>Email Address</label>
                                                        <input
                                                            id='email'
                                                            type='email'
                                                            autoComplete='off'
                                                            className="d-flex form-control border-0 text-grey p-0 pb-1 w-100 fs-4 border"
                                                            placeholder='Email'
                                                        />
                                                    </div>
                                                    <div className='px-0 border-bottom fs-4 cursor-pointer justify-content-between align-items-center border-white border-1'>
                                                        <label htmlFor='password' className='p-0 mt-2 mb-4'>Password</label>
                                                        <input
                                                            id='password'
                                                            autoComplete='off'
                                                            type='password'
                                                            className="d-flex form-control border-0 text-grey p-0 pb-1 w-100 fs-4 border"
                                                            placeholder='Password'
                                                        />
                                                    </div>
                                                </form>
                                                <a onClick={handleForgotPassword} className='text-danger fs-4 text-end w-100'>Forgot Password?</a>
                                                <div className="w-100 my-3">
                                                    <Button type='button' text={'Login'} performAction={handleLogin} className='fw-bold fs-4 w-100 rounded-2 btn-white ' />
                                                </div>
                                                <span className='text-grey text-center fs-4 w-100'>Don't have an account? <a className='text-danger' onClick={redirectToSignup}>Sign Up</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>)}
            {showResetPassword && <ResetPassword />}
        </>
    );
}
