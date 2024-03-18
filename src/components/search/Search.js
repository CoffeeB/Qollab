import React from 'react';
import SideCard from '../profile/SideCards';
import { useRouter } from 'next/router';
import SectionHead from '../profile/SectionHead';

export default function Search({ userImage, userName, userAge, cardName }) {
    const router = useRouter();

    const viewUserProfile = () => {
        router.push('/viewProfile');
    };

    const createSideCards = () => {
        const totalSideCards = 5;
        let sideCards = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < totalSideCards; i++) {
            sideCards.push(
                <React.Fragment key={i}>
                    <div className='mb-4'>    
                        <div className='row border-4 ms-lg-2 mt-3 mb-0 border-start border-danger px-0 align-items-center flex-wrap'>
                            <SectionHead text={cardName || 'Model of the Day'} />
                        </div>
                        <div className='col-12'>
                            <SideCard performAction={viewUserProfile} userImage={userImage} userName={userName} userAge={userAge} cardName={cardName} />
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        return sideCards;
    };

    return (
        <div className="row">

            <div className="col-lg-5 col-sm-12 p-lg-0 p-sm-0 px-md-5">
                <div className="border-0 rounded-0 card-common overflow-x-hidden vh-lg-98 vh-sm-85 mh-100 h-100">
                    <div className="card-body px-3">
                        <div className="chat-app">
                            <div className="chat pb-lg-0 pb-sm-3">
                                <div className="chat-history overflow-y-scroll overflow-x-hidden vh-70 h-100">
                                    <ul className="row mb-0 p-0 pt-2">
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-start-5 mw-60 float-end">
                                                I'm looking for a partner
                                            </div>
                                        </li>
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-end-5 mw-100 w-md-50 w-sm-50 float-start">
                                                Project has been already finished and I have results to show you.
                                            </div>
                                        </li>
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-start-5 mw-60 float-end">
                                                I'm looking for a partner
                                            </div>
                                        </li>
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-end-5 mw-100 w-md-50 w-sm-50 float-start">
                                                Project has been already finished and I have results to show you.
                                            </div>
                                        </li>
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-start-5 mw-60 float-end">
                                                I'm looking for a partner
                                            </div>
                                        </li>
                                        <li className="clearfix list-unstyled mb-2 w-100">
                                            <div className="position-relative lh-2 fs-5 d-inline-block p-3 lh-base bg-secondary rounded-bottom-5 mb-2 rounded-end-5 mw-100 w-md-50 w-sm-50 float-start">
                                                Project has been already finished and I have results to show you.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3 clearfix">
                                    <div className="input-group mb-0">
                                        <input type="text" className="form-control py-2" placeholder="Enter text here..." />
                                        <div className="input-group-prepend pt-0">
                                        <button className="input-group-text hover-dnager bg-light py-2 cursor-pointer rounded-start-0"><i className="bx bxs-paper-plane bg-light px-2 ps-1 pt-2 pb-2 rounded-end-2 rounded-0 display-7 position-absolute"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-7 d-lg-block d-none pt-0">
                <div className="card pt-0 px-6 border-0 rounded-0 card-common overflow-y-scroll mh-100 h-100 vh-98">
                    <div className="card-body pt-0">
                        <div>
                            <div className="text-left text-secondary pb-6">
                                {createSideCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
