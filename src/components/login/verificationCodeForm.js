import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '@/utils/api';
import showCustomStyledAlert from '@/utils/sweetAlert2';
import { useRouter } from 'next/router';
import login from '@/utils/login';

const VerificationCodeForm = ({ email, password, onSuccess, isSignup }) => {
    const router = useRouter();
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isResendButtonDisabled, setIsResendButtonDisabled] = useState(false);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        setIsButtonDisabled(verificationCode.some((digit) => digit === ''));
    }, [verificationCode]);

    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newVerificationCode = [...verificationCode];
            newVerificationCode[index] = value;
            setVerificationCode(newVerificationCode);

            if (value === '' && index > 0) {
                inputRefs[index - 1].current.focus();
            } else if (index < inputRefs.length - 1 && value !== '') {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleRedirect = () => {
        router.push("/home");
    }

    const handleVerification = async (e) => {
        e.preventDefault();

        try {
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
        <div className="container mt-5">
            <form onSubmit={handleFormSubmit}>
                <div className="container row mx-lg-4 px-4 mb-3">
                    {verificationCode.map((digit, index) => (
                        <div key={index} className="col-3 mb-2 border-0">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                autoFocus={index === 0}
                                ref={inputRefs[index]}
                            />
                        </div>
                    ))}
                </div>
                <div className="row my-4">
                    <button type="submit" className="btn btn-primary rounded-pill" disabled={isButtonDisabled}>
                        Verify
                    </button>
                </div>
                <hr />
                <div className="row my-4">
                    <button
                        type="submit"
                        className="btn btn-outline-success rounded-pill"
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
