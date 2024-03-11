import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Home from '@/components/profile/Home';

export default function profile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-lg-10 px-0">
        <div className="container-fluid">
          <div className="row vh-100 mh-100 h-100 overflow-hidden">
            <Home />
          </div>
        </div>
      </section>
    </>
  );
}
