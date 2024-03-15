import React, { useState } from 'react';
import QuestionHead from '@/components/onboarding/QuestionHead';
import { Button } from '@/components/general/Button';
import { useRouter } from 'next/router';
import Layout from '@/components/general/Layout';
import PersonalForm from '@/components/onboarding/PersonalForm';

export default function onboarding() {
    const [ showForm, setShowForm ] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    }
    // const router = useRouter();

    // const redirectToQuestions = () => {
    //     router.push('/question')
    // }
    
    return (
    <>
        {!showForm ?  ( 
            <>
                <Layout />
                <section className="p-lg-5 py-sm-5 mt-lg-5">
                    <div className="container">
                        <div className="row bg-pattern rounded-3 p-7 px-2 g-0">
                            <div className="col-xl-8 col-lg-10 whole-content offset-lg-1 col-md-12 col-12">
                                <div className="position-relative content z-1 my-lg-5">
                                    <div className="mb-5 content-text text-center">
                                        <QuestionHead text={`Remember there is no REASN To be shy about finding love`} textClass={'display-6 fw-bold mt-5 text-center w-100'}/>
                                        <p className="mb-4 fs-3 mt-4 text-center display-6 px-5 fw-light mx-auto">Create an extensive profile and find that special someone to spend the rest of your life with.</p>
                                    </div>
                                    <div className="btns-sect col-6">
                                        <Button text={'Continue'} performAction={handleShowForm} className='fw-bold rounded-pill btn-white ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        ) : (
        <PersonalForm />)}
    </>
    )
}
