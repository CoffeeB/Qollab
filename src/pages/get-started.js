import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import ContentHead from '@/components/general/ContentHead';
import { Button } from '@/components/general/Button';
import { useRouter } from 'next/router';
import api from '@/utils/api';
import showCustomStyledAlert from '@/utils/sweetAlert2';
import VerificationCodeForm from '@/components/login/verificationCodeForm';

export default function GetStarted() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const redirectToLogin = () => {
        router.push('/login');
    };

    const handleSubmit = async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            // Check if passwords match
            if (formData.password !== formData.confirmPassword) {
                throw new Error('Passwords do not match');
            }
    
            // Send signup request
            const response = await api.post('/signup', formData);
            console.log('Signup successful:', response.data);
    
            // Redirect to verification code form
            router.push({
                pathname: '/verificationCodeForm',
                query: { email: formData.email, password: formData.password },
            });
        } catch (error) {
            console.error('Signup error:', error.message);
            // Display error using Sweet Alert
            showCustomStyledAlert('Signup Error', error.message, 'error', 'your-custom-class');
        }
    };

    return (
        <>
            <div className='head-container'>
                <Header />
            </div>
            <section className="row justify-content-center py-2">
                <div className='col-md-12 vh-80 mh-100 overflow-auto'>
                    <div className='row'>
                            <ContentHead text={'Create an Account'} className={'fs-3 text-center fw-bold'} />
                            <p className='text-danger text-center fs-base mt-1 fw-bold'>Sign Up</p>
                        <div className='col-md-5 mx-auto'>
                            <div className='row px-3'>
                                <form className='form-group' onSubmit={handleSubmit}>
                                    <div className='px-0 cursor-pointer'>
                                        <label htmlFor='email' className='p-0 mt-4 mb-2'>Email Address</label>
                                        <input
                                            id='email'
                                            type='email'
                                            autoComplete='off'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 "
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className='px-0'>
                                        <label htmlFor='password' className='p-0 mt-4 mb-2'>Password</label>
                                        <input
                                            id='password'
                                            type='password'
                                            autoComplete='off'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 "
                                            placeholder='Password'
                                        />
                                    </div>
                                    <div className='px-0'>
                                        <label htmlFor='confirmPassword' className='p-0 mt-4 mb-2'>Confirm Password</label>
                                        <input
                                            id='confirmPassword'
                                            type='password'
                                            autoComplete='off'
                                            name='confirmPassword'
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 "
                                            placeholder='Confirm Password'
                                        />
                                    </div>
                                    <div className="my-3">
                                        <Button type='submit' performAction={handleSubmit} text={'Sign Up'} className='fw-bold fs-4 w-100 rounded-2 btn-white' />
                                    </div>
                                    <span className='text-grey text-center fs-base w-100'>Already have an account? <a className='text-danger' onClick={redirectToLogin}>Login</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
