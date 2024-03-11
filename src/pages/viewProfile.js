import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import ViewProfile from '@/components/profile/ViewProfile';

export default function viewProfile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-lg-10 ps-sm-0 py-sm-0">
        <div className="container-fluid">
        <div className="row overflow-hidden vh-100">
          <div>
            <ViewProfile />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
