import React, { useRef } from 'react';
import Nav from '@/components/profile/Nav';
import Profile from '@/components/profile/Profile';
import useAuth from '@/hooks/useAuth';
import ScrollToTopBtn from '@/components/general/ScrollToTopBtn';

export default function profile() {
  const { isAuthenticated } = useAuth();
  const topRef = useRef(null);

  return (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <section className=" z-n1 ps-lg-10 px-sm-0">
        <div className="container-fluid">
          <div className="row overflow-y-lg-hidden overflow-y-sm-auto overflow-x-hidden vh-100">
            <div>
              <Profile />
            </div>
          </div>
        </div>
        <ScrollToTopBtn targetRef={topRef}/>
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
