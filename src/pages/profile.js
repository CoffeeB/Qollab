import React, {  } from 'react';
import Nav from '@/components/profile/Nav';
import Profile from '@/components/profile/Profile';
import useAuth from '@/hooks/useAuth';

export default function profile() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

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
        <div className="btn-scroll-top active-progress">
          <svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
            <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '139.989, 139.989', strokeDashoffset: '125.775' }}></path>
          </svg>
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
