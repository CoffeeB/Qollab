import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import PageHeader from '@/components/general/PageHeader';
import Link from 'next/link';

export default function Notifications() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-10">
        <div className="container-fluid">
          <div className="row other-contain-info">
            <PageHeader text={'Notifications'}/>
            <div className='overflow-y-scroll overflow-x-hidden mt-0 contain-info p-0'>
                <div className='row p-0'>
                  <div className='col-6 border-1 border-end border-grey bg-dark p-0'>
                    <p className='fs-3 text-danger fw-bold px-5'>Today</p>
                    <div className='d-flex align-items-end border-bottom border-white border-1 justify-content-between px-6 pb-2 '>
                      <div>
                        <p className='text-white'>You have successfully paid for jane doe's details</p>
                        <p className='text-grey'>Lagos, Nigeria</p>
                      </div>
                      <Link href={"/viewProfile"} className='text-danger'>View Contact Details</Link>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='p-5'>
                      <p className='fs-3'>You have successfully paid for jane doe's details</p>
                      <span className='d-grid'>
                        <span className='p-2 text-grey'>Contact Name:- Jane Doe</span>
                        <span className='p-2 text-grey'>Contact Gender:- Female</span>
                        <span className='p-2 text-grey'>Contact Status:- Single</span>
                        <span className='p-2 text-grey'>Contact Sexuality:- Straight</span>
                      </span>
                      <p>Contact Purchased at 12:13 Am</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
