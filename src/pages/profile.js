import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Profile from '@/components/profile/Profile';

export default function profile() {
  return (
    <>
      <Nav />
      <section className=" z-n1 ps-10">
        <div className="container-fluid">
          <div className="row overflow-hidden contain-info">
            <div>
              <Profile />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
