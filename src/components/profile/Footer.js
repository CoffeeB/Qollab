import React from 'react'
import Logo from '../general/Logo';

export default function Footer() {
  return (
    <footer className='bg-black-2 col-sm-12 fs-6 w-100'>
        <div className='row p-4 w-100'>
            <div className='col-md-4 col-sm-6 p-4'>
                <Logo />
                <div className='py-3 fs-7'>
                    <p className='text-break'>Copyright &copy; 2023 Reasns Platform</p>
                    <p>All rights reserved</p>
                </div>
                <div className=''>
                    <i className='bx me-1 rounded-circle bg-light text-white p-1 border-danger bxl-instagram-alt display-7' />
                    <i className='bx me-1 rounded-circle bg-light text-white p-1 border-danger bxl-facebook-circle display-7' />
                    <i className='bx me-1 rounded-circle bg-light text-white p-1 border-danger bxl-twitter display-7' />
                    <i className='bx me-1 rounded-circle bg-light text-white p-1 border-danger bxl-youtube display-7' />
                </div>
            </div>
            <div className='col-md-2 col-sm-1 sm-w-50 p-4'>
                <h5>Company</h5>
                <div className='d-grid fs-7'>
                    <a className='mb-2'>About us</a>
                    <a className='mb-2'>Work with us</a>
                    <a className='mb-2'>Write a testimony</a>
                    <a className='mb-2'>Careers</a>
                </div>
            </div>
            <div className='col-md-2 col-sm-1 sm-w-50 p-4'>
                <h5>Support</h5>
                <div className='d-grid fs-7'>
                    <a className='mb-2'>Help center</a>
                    <a className='mb-2'>Terms of service</a>
                    <a className='mb-2'>Legal</a>
                    <a className='mb-2'>Privacy policy</a>
                </div>
            </div>
            <div className='col-md-3 col-sm-1 sm-w-75 p-4'>
                <h5>Stay Up to Date</h5>
                <div className='pt-1'>
                    <input className='w-100 p-2 rounded-start-2  text-light border-0' placeholder='Your email address' type='email'/>
                    <button className='hover-danger bg-light px-2 pt-1 rounded-end-2 rounded-0 display-7 border-0 position-absolute'><i className='bx bxs-paper-plane'/></button>
                </div>
            </div>
        </div>
    </footer>
  )
}
