import React, {  } from 'react';
import Nav from '@/components/default/Nav'
import Image from 'next/image';

export default function messages() {

  return (
    <>
      {/* logged in nav */} 
      
      {/* logged out nav */}
      <Nav />


      {/* landing */}
      <section className="container-fluid pt-10">
        <div className='row m-0 justify-content-center pt-3'>
          <div className='col-md-8 rounded bg-white p-3 vh-80 mh-100 overflow-y-scroll'>
            <h4 className='text-dark'>Messages and Notifications</h4>
            <div className='bg-secondary rounded p-3 bg-opacity-10 h-100'>
                <div className='row m-0 flex-column h-100 align-items-center justify-content-center'>
                    <h3 className='fw-medium text-dark text-center col-6'>Your Inbox is Empty</h3>
                    <span className='col-7 px-2 text-center text-dark opacity-50 fw-medium'>This is where you will find new messages and notifications. As well as arrange pick-ups and drop-offs. Ready to get started?</span>
                    <div className='col-5 mt-4 d-flex justify-content-between align-items-center'>
                        <button type='button' className='border-0 bg-secondary bg-opacity-50 py-2 px-3 rounded-pill'>List an item</button>
                        <button type='button' className='border-0 bg-primary py-2 px-3 rounded-pill'>Search items</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of landing */}
    </>
  );
}

