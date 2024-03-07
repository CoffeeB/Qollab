import React from 'react'
import Logo from '../general/Logo';

export default function Footer() {
  return (
    <footer className='bg-black-2 fs-6 w-100'>
        <div className='d-flex p-4 align-items-start justify-content-between w-100'>
            <div className='d-grid p-4'>
                <Logo />
                <div className='py-3 fs-7'>
                    <p>Copyright &2023 Reasns Platform</p>
                    <p>All rights reserved</p>
                </div>
                <div className='d-flex align-items-center'>
                    <i className='bx me-2 rounded-circle bg-light text-white p-1 border-danger bxl-instagram-alt display-7' />
                    <i className='bx me-2 rounded-circle bg-light text-white p-1 border-danger bx-globe display-7' />
                    <i className='bx me-2 rounded-circle bg-light text-white p-1 border-danger bxl-twitter display-7' />
                    <i className='bx me-2 rounded-circle bg-light text-white p-1 border-danger bxl-youtube display-7' />
                </div>
            </div>
            <div className='d-flex w-100 justify-content-evenly p-4'>
                <div className='d-grid me-3'>
                    <h5>Company</h5>
                    <div className='d-grid fs-7'>
                        <a className='mb-2'>About us</a>
                        <a className='mb-2'>Work with us</a>
                        <a className='mb-2'>Write a testimony</a>
                        <a className='mb-2'>Careers</a>
                    </div>
                </div>
                <div className='d-grid me-3'>
                    <h5>Support</h5>
                    <div className='d-grid fs-7'>
                        <a className='mb-2'>Help center</a>
                        <a className='mb-2'>Terms of service</a>
                        <a className='mb-2'>Legal</a>
                        <a className='mb-2'>Privacy policy</a>
                    </div>
                </div>
                <div className=''>
                    <h5>Stay Up to Date</h5>
                    <div className='pt-1'>
                        <input className='w-100 p-2 rounded-start-2  text-light border-0' placeholder='Your email address' type='email'/>
                        <a className='bx bxs-paper-plane hover-danger bg-light px-2 pt-1 pb-2 rounded-end-2 rounded-0 display-7 position-absolute'/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
