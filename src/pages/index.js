import React from 'react';
import Header from '@/components/landing/Header';
import ContentHead from '@/components/general/ContentHead';
import {Button, LoginButton} from '@/components/general/Button';
import { useRouter } from 'next/router';

export default function Landing() {
  const router = useRouter();

    const redirectToSignUp = () => {
        router.push('/get-started')
    }

    const redirectToLogin = () => {
      router.push('/login')
    }
    
    const redirectToProfiles = () => {
      router.push('/home')
    }
  return (
    <>
      <div className='head-container'>
        <Header />
        <div className='login-btn-container'>
          <LoginButton text={'Login'} performAction={redirectToLogin} className='rounded-pill' />
        </div>
      </div>
      <section className="py-5">
          <div className="container">
              <div className="row bg-pattern rounded-3 p-7 g-0">
                  <div className="col-xl-8 col-lg-10 whole-content offset-lg-1 col-md-12 col-12">
                      <div className="position-relative content z-1 my-lg-5">
                          <div className="mb-5 content-text text-center">
                            <ContentHead text={'Welcome to Relationships by '} otherText={'reasns'} className={'question-header'}/>
                            <p className="mb-4 mt-4 sub-text text-white-stable">Embrace the joy of finding true friendship here! No more endless chats or wasted time - just geniune connection and laughter ahead.</p>
                          </div>
                          <div className="btns-sect">
                              <Button text={'View Profiles'} className='red fw-bold fs-4 rounded-pill btn-white' performAction={redirectToProfiles} />
                              <Button text={'SIGN UP'} performAction={redirectToSignUp} className='grey fw-bold fs-4 rounded-pill btn-white'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
