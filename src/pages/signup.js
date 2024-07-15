import Nav from '@/components/landing/Nav'
import React from 'react'

export default function signup() {
  return (
    <>
        <Nav/>
        <section className='vh-100'>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-lg-5 col-md-6 col-9 mt-10'>
                    <h2 className='text-dark text-center fw-medium mb-3'>Welcome to Qollab</h2>
                    <div className='position-relative mt-6'>
                        <form>
                            <div className='m-0 row'>
                                <label className='form-label p-0 text-dark fs-5' htmlFor='email'>Email Address</label>
                                <input type='email' id='email' className='p-3 rounded-2 bg-transparent text-dark border-secondary border-opacity-10' placeholder='Enter email address'/>
                            </div>
                            <button className='d-flex btn border border-secondary bg-primary border-opacity-25 w-100 my-4 rounded-5'>
                                <span className='text-center text-white'>Continue</span>
                            </button>
                        </form>
                        <div className='row my-7 mx-0 align-items-center px-5'>
                            <div className='col-5 bg-secondary bg-opacity-25 divider rounded-pill'/>
                            <span className='col-2 text-dark text-center p-0 fw-bold'>Or</span>
                            <div className='col-5 bg-secondary bg-opacity-25 divider rounded-pill'/>
                        </div>
                        <button type='button' className='d-flex btn border border-secondary bg-white border-opacity-25 w-100 my-4 rounded-5'>
                            <i className='bx bxl-google position-absolute border-end border-dark z-3 border-opacity-25 text-dark start-0 fs-2 ps-3 pe-2 mb-2'></i>
                            <span className='text-center text-dark'>Continue with Google</span>
                        </button>
                        <button type='button' className='d-flex btn border border-secondary btn-facebook bg-facebook border-opacity-25 w-100 my-4 rounded-5'>
                            <i className='bx bxl-facebook position-absolute border-end border-dark z-3 border-opacity-25  start-0 fs-2 ps-3 pe-2 mb-2'></i>
                            <span className='text-center '>Continue with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
