import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Home from '@/components/profile/Home';

export default function profile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-10">
        <div className="container-fluid">
          <div className="row overflow-hidden contain-info">
            <div>
              <Home />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
