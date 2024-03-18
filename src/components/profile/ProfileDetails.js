import React, {forwardRef, useState} from "react";
import Collapsibles from "@/components/profile/Collapsibles";
import Modal from "../general/Modal";

const ProfileDetails = forwardRef((props, ref) => {
    const [ showModal, setShowModal ] = useState(false);
    const maxQuestions = 11;
    let answeredQuestions = [];

    const handleModal = () => {
        setShowModal(true);
    }

    // Generate the Featured components dynamically
    for (let i = 0; i < maxQuestions; i++) {
        answeredQuestions.push(
            <div key={i} className="col-md-6 col-12">
                <Collapsibles name={"Religion and Tribe"} question={"Do you believe in God?"} answer={"Yes. I believe in God"} identity={i} ariaId={"headingOne"}/>
            </div>
        );
    }

    return (
        <>
            <div className="card border-0 overflow-y-lg-scroll overflow-y-sm-hidden overflow-x-hidden mh-lg-100 h-lg-100 rounded-0 card-common" ref={ref}>
                <div className="card-body row">
                    <div className="d-flex col-12 flex-wrap justify-content-between">
                        <div className="text-left text-secondary">
                            <h5 className="mb-2">Share profile:</h5>
                            <div>
                                <i className="bx text-danger border me-2 rounded-1 p-0 border-danger bxl-twitter display-6" />
                                <i className="bx text-danger border me-2 rounded-1 p-0 border-danger bxl-facebook-circle display-6" />
                                <i className="bx text-danger border me-2 rounded-1 p-0 border-danger bxl-instagram-alt display-6" />
                                <i className="bx text-danger border me-2 rounded-1 p-0 border-danger bxl-whatsapp display-6" />
                            </div>
                        </div>
                    </div>
                    <div className="accordion d-flex mt-4 mb-8 col-12 flex-wrap justify-content-between" id="questionsAccordion">
                        <div className="row">
                            {answeredQuestions}
                        </div>
                    </div>
                </div>
                <div className="w-10 d-flex flex-column mb-lg-3 mb-sm-8 z-3 col-11 align-items-end position-fixed end-0 me-lg-1 me-sm-8 bottom-0">
                    <div className="text-left">
                        <button className="my-2 border-0 bg-dark rounded-3 fs-6 text-white p-md-3 p-sm-2" data-bs-toggle="tooltip"data-bs-placement="top" title="View Safety Tips" onClick={handleModal}><i className="bx bxs-shield text-danger display-7" /></button>
                    </div>
                </div>
            </div>

            <Modal
                heading={'Safety tips'}
                headingClass={'fs-2 text-secondary fw-bold'}
                tipsClass={'text-secondary fs-5 my-2 fw-light list-style-dot'}
                firstTip={'Always inform someone about your where about and plans before meeting anyone.'}
                secondTip={'Always meet in an open space first!!!'}
                thirdTip={'Remember to review your friends profile by writing about them so others who want to make friends with this person knows if they should or not.'}
                firstBtnText={'Proceed'}
                secondBtnClass={'d-none'}
                setShowModal={setShowModal}
                showModal={showModal} 
            />
                
        
        </>

    );
    
})

export default ProfileDetails;