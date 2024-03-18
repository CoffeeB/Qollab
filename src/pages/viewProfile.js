import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import ViewProfile from '@/components/profile/ViewProfile';
import useAuth from '@/hooks/useAuth';

export default function viewProfile() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <>
      <Nav isAuthenticated={isAuthenticated}/>
      <section className=" z-n1 ps-lg-10 ps-sm-0 py-sm-0 pb-0">
        <div className="container-fluid">
        <div className="row overflow-y-lg-hidden overflow-y-sm-auto overflow-x-hidden vh-100">
          <div>
            <ViewProfile />
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

