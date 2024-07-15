import Nav from '@/components/landing/Nav'
import React from 'react'

export default function login() {
  return (
    <>
        <Nav/>
        <section className='vh-100'>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-lg-5 col-md-6 col-9'>
                    <h2 className='text-dark text-center fw-medium mb-3'>Welcome to Qollab</h2>
                    <div className='position-relative'>
                        <button type='button' className='d-flex btn border border-secondary bg-white border-opacity-25 w-100 my-4 rounded-5'>
                            <i className='bx bxl-gmail position-absolute border-end border-dark z-3 border-opacity-25 text-dark start-0 fs-2 ps-3 pe-2 mb-2'></i>
                            <span className='text-center text-dark'>Continue with Email</span>
                        </button>
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
