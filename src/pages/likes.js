import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import PageHeader from '@/components/general/PageHeader';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';

export default function Likes() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  
  return (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <section className=" z-n1 ps-lg-10 px-sm-2 vh-100 bg-dark">
        <div className="container-fluid">
          <div className="row">
            <PageHeader text={'Likes'} />
            <div className='overflow-y-scroll bg-black-2 vh-lg-80 vh-md-100 vh-lg-100'>
              <div className='row border-1 border-bottom border-grey'>
                <div className='d-flex align-items-center justify-content-between px-5 py-2'>
                  <div className='d-flex align-items-center'>
                    <div>
                        <Image src="/denisse-alanis-jMCzvolvS0Q-unsplash.jpg" alt="" className='rounded-circle object-fit-cover avatar-xl mx-3' width={500} height={500}/>
                    </div>  
                    <div>
                        <p className='text-white mb-0'>Jane doe liked your profile</p>
                        <p className='text-grey mb-0'>Lagos, Nigeria</p>
                    </div>  
                  </div>
                  <div className='d-flex flex-column align-items-center justify-content-center'>
                    <span className='text-success mb-2'>Available</span>                        
                    <Link href={"/viewProfile"} className='text-danger'>View Profile</Link>
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