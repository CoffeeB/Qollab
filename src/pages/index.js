import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Home from '@/components/profile/Home';
import useAuth from '@/hooks/useAuth';

export default function profile() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <section className="z-n1 ps-lg-10 px-0">
        <div className="container-fluid">
          <div className="row vh-100 mh-100 h-100 overflow-hidden">
            <Home />
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
