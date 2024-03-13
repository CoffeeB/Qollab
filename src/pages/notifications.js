import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import PageHeader from '@/components/general/PageHeader';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

export default function Notifications() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <section className=" z-n1 ps-lg-10 ps-sm-1">
        <div className="container-fluid">
          <div className="row overflow-hidden vh-99">
            <PageHeader text={'Notifications'}/>
            <div className='p-0'>
                <div className='row p-0 overflow-auto vh-80'>
                  <div className='col-md-6 col-sm-12 border-1 border-end border-grey bg-dark p-0'>
                    <p className='fs-md-3 fs-sm-5 text-danger fw-bold px-5'>Today</p>
                    <div className='d-flex align-items-end border-bottom border-white border-1 justify-content-between px-6 pb-2 '>
                      <div>
                        <p className='text-white'>You have successfully paid for jane doe's details</p>
                        <p className='text-grey'>Lagos, Nigeria</p>
                      </div>
                      <Link href={"/viewProfile"} className='text-danger'>View Contact Details</Link>
                    </div>
                  </div>
                  <div className='col-md-6 d-md-block d-none'>
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

export async function getServerSideProps(context) {
  const { req } = context;
  const authToken = req.cookies.authToken;

  // Check if the authToken exists
  const isAuthenticated = !!authToken;

  return {
      props: {
          isAuthenticated,
      },
  };
}