import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '@/utils/api';
import showCustomStyledAlert from '@/utils/sweetAlert2';
import { useRouter } from 'next/router';
import login from '@/utils/login';

const VerificationCodeForm = ({ email, password, onSuccess, isSignup }) => {
    const router = useRouter();
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isResendButtonDisabled, setIsResendButtonDisabled] = useState(false);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [isLoading, setIsloading] = useState(false);

    const loadingText = (!isLoading) ? "Verify" : "Verifying Code ...";

    useEffect(() => {
        setIsButtonDisabled(verificationCode.some((digit) => digit === ''));
    }, [verificationCode]);

    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;
            setVerificationCode(newVerificationCode);
    
            if (value === '') {
                // Move to the previous input field if the value is empty
                if (index > 0 && inputRefs[index - 1]) {
                    inputRefs[index - 1].current.focus();
                }
            } else {
                // Move to the next input field if the value is not empty
                if (index < inputRefs.length - 1) {
                    inputRefs[index + 1].current.focus();
                }
            }
        }
    };
    
    
    

    const handleRedirect = () => {
        router.push("/");
    }

    const handleVerification = async (e) => {
        e.preventDefault();

        try {
            setIsloading(true);
            const response = await api.post('care-seekers/verify-code', {
                verificationCode: parseInt(verificationCode.join('')),
                email,
                password,
            });

            if (response.data.status === 'success') {
                showCustomStyledAlert('Success!', 'Verification successful!', 'success', {
                    customClass: {
                        container: 'container',
                        popup: 'bg-darkgray',
                        title: 'title',
                        content: 'text-center',
                        confirmButton: 'btn btn-outline-success bg-green rounded-pill',
                        cancelButton: 'btn btn-danger',
                    },
                });

                if (isSignup) {
                    // If it's signup process, continue with signup
                    await login({ email, password }, handleRedirect);
                    onSuccess(); // Notify the parent component about the successful verification
                } else {
                    // If it's password reset, allow to reset password
                    router.push('/reset-password'); // Redirect to reset password page
                }
            } else {
                const errorMessage = response.data.message || 'Verification failed.';
                showCustomStyledAlert('Notice!', errorMessage, 'error', {
                    customClass: {
                        container: 'container',
                        popup: 'bg-darkgray',
                        title: 'title',
                        content: 'text-center',
                        confirmButton: 'btn btn-outline-success bg-green rounded-pill',
                        cancelButton: 'btn btn-danger',
                    },
                });

                setIsResendButtonDisabled(!response.data.resend_allowed);
            }

            console.log('Verification API Response:', response.data);
        } catch (error) {
            showCustomStyledAlert('Error', error?.response?.data?.message || 'An unexpected error occurred. Please try again later.', 'error', {
                customClass: {
                    container: 'container',
                    popup: 'bg-darkgray',
                    title: 'title',
                    content: 'text-center',
                    confirmButton: 'btn btn-outline-success bg-green rounded-pill',
                    cancelButton: 'btn btn-danger',
                },
            });
            setIsResendButtonDisabled(!error?.response?.data?.resend_allowed);
            console.error('Verification Failed:', error?.response?.data?.message);
        } finally {
            setIsloading(false);
        }
    };

    const handleResendVerification = async (e) => {
        e.preventDefault();

        try {
            const resendResponse = await api.post('care-seekers/resend-verification-code', {
                email,
            });

            // Handle the resend verification response as needed
            console.log('Resend Verification API Response:', resendResponse.data);

            setIsResendButtonDisabled(!resendResponse.data.resend_allowed);
        } catch (error) {
            console.error('Resend Verification Failed:', error.message);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleVerification(e);
    };

    return (
        <div className="card border-0 mx-5">
            <h1 className="h3 text-light text-center mt-3"> Enter Verification Code</h1>
            <form onSubmit={handleFormSubmit} className="form-goup">
                <div className="row mx-lg-4 mx-2 mb-3 py-2">
                    {verificationCode.map((digit, index) => (
                        <div key={index} className="col-md-2 col-sm-2 px-1 mb-2 border-0">
                            <input
                                type="text"
                                className="form-control form-control-lg text-center border-2 border-primary"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                autoFocus={index === 0}
                                ref={inputRefs[index]}
                            />
                        </div>
                    ))}
                </div>
                <div className="row my-4 px-2 mx-5 border-1 border-bottom border-primary pb-5">
                    <button type="submit" className={`btn btn-primary rounded-pill w-100 text-light`} >
                        {loadingText}
                    </button>
                </div>
                <div className="row my-4 mx-5 px-2">
                    <button
                        type="submit"
                        className="btn btn-success rounded-pill w-100"
                        onClick={handleResendVerification}
                        disabled={isResendButtonDisabled}
                    >
                        Resend Verification Code
                    </button>
                </div>
            </form>
        </div>
    );
};

VerificationCodeForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    isSignup: PropTypes.bool,
};

export default VerificationCodeForm;
