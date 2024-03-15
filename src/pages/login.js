import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/landing/Header';
import ContentHead from '@/components/general/ContentHead';
import ResetPassword from '@/components/login/ResetPassword';
import showCustomStyledAlert from "@/utils/sweetAlert2";
import api from '@/utils/api';
import useAuth from "@/hooks/useAuth";
import Cookies from 'js-cookie';
import { handleRedirect, transformErrors } from '@/utils/generalUtils';

export default function LoginPage() {
    const [showResetPassword, setShowResetPassword] = useState(false);
    const router = useRouter();
    const { isAuthenticated, userProfile } = useAuth();
    console.log(isAuthenticated);
    const loginEndpoint = "authentication/login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [name]: '' // Clear validation errors when input changes
      }));
    };    

    const loginText = isLoading ? "Logging in" : "Login";

  // if (isAuthenticated) {
  //   handleRedirect(userProfile?.user_type);
  //   // router.push("/account/profile");
  // }

  const handleLogin = async (toke) => {
    Cookies.set("authToken", toke);
    setToken(Cookies.get('authToken'));
    handleRedirect();

    // router.push("/account/profile");

    // console.log('API TOKEN',token);

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email && !formData.password) {
        setError("Please enter both email and password.");
        return;
    }

    try {
        setIsLoading(true);
        setError("");

        const response = await api.post(loginEndpoint, formData);
        const toke = response?.data?.authorisation?.token;
        const status = response?.data?.status;
        const user_type = response?.data?.user?.user_type;

        if (status === "success") {
            handleLogin(toke, user_type);
        } else {
            setError("Login failed. Please check your credentials.");
        }

    } catch (error) {
      const api_errors = error?.response?.data?.errors;
      if (api_errors) {
        setValidationErrors(transformErrors(api_errors));
        setError("A validation error occurred. Please resolve and try again.");
      } else {
      // setError(transformErrors(api_errors));
      setError(error?.response?.data?.message || "An unexpected error occurred. Please try again later.");
      // console.error("Error during login:", error);
      }
  } finally {
      setIsLoading(false);
  }
};


    const handleForgotPassword = () => {
        setShowResetPassword(true);
    };

    const redirectToSignup = () => {
        // Adjust this function according to your actual routes
        router.push('/landing');
    };

    // const handleLogin = async () => {
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;

    //     try {
    //         // Call your login function here, adjust the arguments according to your actual implementation
    //         await login({ email, password }, redirectToHome);
    //     } catch (error) {
    //         console.error('Login Error:', error);
    //         // Display error message using Sweet Alert
    //         showCustomStyledAlert('Login Error', error.message || 'An unexpected error occurred. Please try again later.', 'error', {
    //             customClass: {
    //                 container: 'container',
    //                 popup: 'bg-darkgray',
    //                 title: 'title',
    //                 content: 'text-center',
    //                 confirmButton: 'btn btn-outline-success bg-green rounded-pill',
    //                 cancelButton: 'btn btn-danger',
    //             },
    //         });
    //     }
    // };

    return (
        <>
            {!showResetPassword && (
              <>
                <div className='head-container'>
                    <Header />
                </div>
                <section className="row justify-content-center py-2 vh-80 mh-100 overflow-auto">
                  <div className="row">
                    <div className="row rounded-3 pt-5 g-0">
                      <div className='col-md-6 d-md-block d-none'>
                          
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="z-1 my-lg-5">
                          <div className="content-text text-center">
                              <ContentHead text={'Welcome to Relationships by '} otherText={'reasns'} className={'fs-3 fw-bold'}/>
                          </div>
                          <div className='col-lg-12 px-8'>
                            <div>
                              <div className="row">
                                <p className='text-danger fs-2 fw-bold'>Login</p>
                                <form className='col-12 px-3 my-2' onSubmit={handleSubmit}>
                                  <div className='px-0 fs-4  cursor-pointer justify-content-between align-items-center'>
                                    <label htmlFor='email' className='p-0 mt-2 mb-4'>Email Address</label>
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
                                  <div className='px-0 fs-4 cursor-pointer justify-content-between align-items-center'>
                                    <label htmlFor='password' className='p-0 mt-2 mb-4'>Password</label>
                                    <input
                                      id='password'
                                      autoComplete='off'
                                      type='password'
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
                                  {error &&  (
                                    <div className="mt-2 alert alert-danger alert-dismissible fade show border-0 border-3 rounded-0 border-top shadow border-danger" role="alert">
                                      <span className="fs-sm text-danger">{error}.</span>
                                      <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close" onClick={() => setError("")}></button>
                                    </div>
                                  )}
                                  <a onClick={handleForgotPassword} className='text-danger fs-4 text-end w-100'>Forgot Password?</a>
                                  <div className="w-100 my-3">
                                    <button type='submit'  className='btn fw-bold fs-4 w-100 rounded-2 btn-white '>{loginText}</button>
                                  </div>
                                </form>
                                <span className='text-grey text-center fs-4 w-100'>Don't have an account? <a className='text-danger' onClick={redirectToSignup}>Sign Up</a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
            {showResetPassword && <ResetPassword />}
        </>
    );
}
