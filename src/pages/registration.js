import Nav from '@/components/landing/Nav'
import React from 'react'

export default function registration() {
  return (
    <>
        <Nav/>
        <section className='vh-100'>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-lg-5 col-md-6 col-9 mt-10'>
                    <h2 className='text-dark text-center fw-medium mb-3'>Welcome to Qollab</h2>
                    <div className='position-relative mt-6'>
                        <form className='row m-0'>
                            <div className='col-md-6 px-3 d-grid my-2'>
                                <label className='form-label p-0 text-dark fs-5' htmlFor='fname'>First Name</label>
                                <input type="text" id='fname' className='p-3 rounded-2 bg-transparent text-dark border-secondary border-opacity-10' placeholder='Enter first name'/>
                            </div>
                            <div className='col-md-6 px-3 d-grid my-2'>
                                <label className='form-label p-0 text-dark fs-5' htmlFor='lname'>Last Name</label>
                                <input type="text" id='lname' className='p-3 rounded-2 bg-transparent text-dark border-secondary border-opacity-10' placeholder='Enter last name'/>
                            </div>
                            <div className='col-12 d-grid my-2 position-relative'>
                                <label className='form-label p-0 text-dark fs-5' htmlFor='password'>Password</label>
                                <input type="password" id='password' className='p-3 pe-5 rounded-2 bg-transparent text-dark border-secondary border-opacity-10' placeholder='Enter password'/>
                                <i className='bx bxs-show position-absolute border-opacity-25 bottom-0 end-0 fs-2 translate-middle mx-3 text-dark'></i>
                            </div>
                            <div className='col-12 d-grid my-2 position-relative'>
                                <label className='form-label p-0 text-dark fs-5' htmlFor='cpassword'>Confirm Password</label>
                                <input type="password" id='cpassword' className='p-3 pe-5 rounded-2 bg-transparent text-dark border-secondary border-opacity-10' placeholder='Re-enter password'/>
                                <i className='bx bxs-show position-absolute border-opacity-25 bottom-0 end-0 fs-2 translate-middle mx-3 text-dark'></i>
                            </div>
                            <button className='d-flex btn border border-secondary bg-primary border-opacity-25 w-100 my-4 rounded-5'>
                                <span className='text-center text-white'>Continue</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
