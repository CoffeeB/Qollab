import React from 'react';
import QuestionHead from '@/components/onboarding/QuestionHead';
import { Button } from '@/components/general/Button';
import { useRouter } from 'next/router';
import Layout from '@/components/general/Layout';

export default function onboarding() {
    const router = useRouter();

    const redirectToSignUp = () => {
        router.push('/question')
    }
    
    return (
    <>
        <Layout />
        <section className="py-5">
            <div className="container">
                <div className="row bg-pattern rounded-3 p-7 g-0">
                    <div className="col-xl-8 col-lg-10 whole-content offset-lg-1 col-md-12 col-12">
                        <div className="position-relative content z-1 my-lg-5">
                            <div className="mb-5 content-text text-center">
                                <QuestionHead text={`Remember there is no REASN To be shy about finding love`}/>
                                <p className="mb-4 mt-4 sub-text text-white-stable">Create an extensive profile and find that special someone to spend the rest of your life with.</p>
                            </div>
                            <div className="btns-sect">
                                <Button text={'Publicly'} performAction={redirectToSignUp} className='fw-bold fs-4 rounded-pill btn-white ' />
                                <Button text={'Privately'} performAction={redirectToSignUp} className='btn-white grey fw-bold fs-4 rounded-pill'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
