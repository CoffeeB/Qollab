import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import ContentHead from '@/components/general/ContentHead';
import { Button } from '@/components/general/Button';
import { useRouter } from 'next/router';
import api from '@/utils/api';
import { handleRedirect, transformErrors } from '@/utils/generalUtils'; // Import necessary functions
import VerificationCodeForm from '@/components/login/verificationCodeForm'; // Import VerificationCodeForm
import showCustomStyledAlert from '@/utils/sweetAlert2';

export default function GetStarted() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [showVerificationCodeForm, setShowVerificationCodeForm] = useState(false); // State to toggle the display of VerificationCodeForm
    const [validationErrors, setValidationErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setValidationErrors({ ...validationErrors, [name]: '' });
    };

    const redirectToLogin = () => {
        router.push('/login');
    };

    const handleSubmit = async (e) => {
        if (e) {
            e.preventDefault();
            setIsLoading(true);
            setError("");
            setValidationErrors("");
        }
        try {
            setIsLoading(true);
            setError("");

            // Check if passwords match
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
            }

            // Construct the data object with default values
            const data = {
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.confirmPassword,
                auth_type: 'email',
                user_category: 0,
                user_type: '2', // Default user type
                username: formData.email.split('@')[0], // Extract username from email
                phone: '', // Default empty phone number
            };

            // Send signup request
            const response = await api.post('/authentication/register', data);
            console.log('Signup successful:', response.data);

            // If signup is successful, show the VerificationCodeForm
            setShowVerificationCodeForm(true);
        } catch (error) {
            const api_errors = error?.response?.data?.errors;
            if (api_errors) {
              setValidationErrors(transformErrors(api_errors));
            }
            // setError(transformErrors(api_errors));
            setError(error?.response?.data?.message || "An unexpected error occurred. Please try again later.");
            // console.error("Error during form submission:", error);
        } finally {
            setIsLoading(false);
        }
    };    

    return (
        <>
            <div className='head-container'>
                <Header />
            </div>
            <section className="row justify-content-center py-2 vh-80 mh-100 overflow-auto">
                <div className='col-md-12'>
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
                                            className={`${validationErrors.email ? 'is-invalid' : ''} form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 `}
                                            placeholder='Email'
                                        />
                                        {validationErrors.email && (
                                            <div className="invalid-feedback">
                                            {validationErrors.email}
                                            </div>
                                        )}
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
                                            className={`${validationErrors.password ? 'is-invalid' : ''} form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 `}
                                            placeholder='Password'
                                        />
                                        {validationErrors.password && (
                                            <div className="invalid-feedback">
                                            {validationErrors.password}
                                            </div>
                                        )}
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
                                            className={`${validationErrors.confirmPassword ? 'is-invalid' : ''} form-control form-control-lg border-0 text-grey p-0 ps-2 bg-light text-light pb-1 border-bottom rounded-1 border-primary w-100 bg-transparent fs-4 `}
                                            placeholder='Confirm Password'
                                        />
                                        {validationErrors.confirmPassword && (
                                            <div className="invalid-feedback">
                                                {validationErrors.confirmPassword}
                                            </div>
                                        )}
                                    </div>
                                    {error && (
                                        <div className="mt-2 alert alert-danger alert-dismissible fade show border-0 border-3 rounded-0 border-top shadow border-danger" role="alert">
                                        <span className="fs-sm text-danger">{error}.</span>
                                        <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close" onClick={() => setError("")}></button>
                                      </div>
                                    )}
                                    <div className="my-3">
                                        <Button type='submit' performAction={handleSubmit} text={isLoading ? "Signing Up..." : "Sign Up"} className='fw-bold fs-4 w-100 rounded-2 btn-white' disabled={isLoading} />
                                    </div>
                                    <span className='text-grey text-center fs-base w-100'>Already have an account? <a className='text-danger' onClick={redirectToLogin}>Login</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Conditionally render the VerificationCodeForm */}
            {showVerificationCodeForm && (
                <VerificationCodeForm
                    email={formData.email}
                    password={formData.password}
                    onSuccess={() => {
                        handleRedirect(2); // Call handleRedirect with user_type
                    }}
                    isSignup={true} // Assuming it's a signup process
                />
            )}
        </>
    );
}
