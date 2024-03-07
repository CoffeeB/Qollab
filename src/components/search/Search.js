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
                    <div className='col-12'>
                        <SideCard performAction={viewUserProfile} userImage={userImage} userName={userName} userAge={userAge} cardName={cardName} className={'w-50'}/>
                    </div>
                    <div className='row border-4 ms-lg-2 mt-3 border-start border-danger px-0 align-items-center flex-wrap'>
                        <SectionHead text={cardName || 'Model of the Day'} />
                    </div>
                </React.Fragment>
            );
        }

        return sideCards;
    };

    return (
        <div className="row">

            <div className="col-5 p-0">
                <div className="border-0 rounded-0 card-common overflow-auto contain-info">
                    <div className="card-body px-3">
                        <div className="chat-app">
                            <div className="chat">
                                <div className="chat-history">
                                    <ul className="mb-0">
                                        <li className="clearfix">
                                            <div className="message rounded-bottom-5 mb-2 rounded-start-5 my-message float-right mb-2">
                                                I'm looking for a partner
                                            </div>
                                        </li>
                                        <li className="clearfix">
                                            <div className="message rounded-bottom-5 mb-2 rounded-end-5 other-message float-left">
                                                Project has been already finished and I have results to show you.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-message clearfix">
                                    <div className="input-group mb-0">
                                        <input type="text" className="form-control py-2" placeholder="Enter text here..." />
                                        <div className="input-group-prepend pt-0">
                                            <button className="input-group-text bg-light py-2 cursor-pointer rounded-start-0"><i className="bx bxs-paper-plane display-7"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-7 pt-0">
                <div className="card pb-9 pt-0 px-6 border-0 rounded-0 card-common overflow-auto contain-info">
                    <div className="card-body pt-0">
                        <div>
                            <div className="text-left text-secondary">
                                {createSideCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
