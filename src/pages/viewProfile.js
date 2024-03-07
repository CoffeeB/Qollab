import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import ViewProfile from '@/components/profile/ViewProfile';

export default function viewProfile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-10">
        <div className="container-fluid">
          <ViewProfile />
        </div>
      </section>
    </>
  );
}
