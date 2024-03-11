import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Profile from '@/components/profile/Profile';

export default function profile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-lg-10 px-sm-0">
        <div className="container-fluid">
          <div className="row overflow-hidden vh-100">
            <div>
              <Profile />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
