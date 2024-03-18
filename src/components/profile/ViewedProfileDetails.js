import React from "react";
import Collapsibles from "@/components/profile/Collapsibles";

export default function ViewedProfileDetails() {
    const maxQuestions = 11;
    let answeredQuestions = [];

    // Generate the Featured components dynamically
    for (let i = 0; i < maxQuestions; i++) {
        answeredQuestions.push(
            <div key={i} className="col-md-6">
                <Collapsibles name={"Religion and Tribe"} question={"Do you believe in God?"} answer={"Yes. I believe in God"} identity={i} ariaId={"headingOne"}/>
            </div>
        );
    }

    return (
        <div className="card border-0 overflow-y-lg-scroll overflow-y-sm-hidden overflow-x-hidden mh-lg-100 h-lg-100 rounded-0 card-common">
            <div className="card-body row">
                <div className="d-flex col-12 flex-wrap justify-content-between">
                    <div className="text-left text-secondary">
                        <p className="fs-sm-6">
                            Go through My Summarised Biography and if you Would Like To Take Know Me More, let's go on a Date. You can Request for my Contacts At The Bottom Of my Page 
                        </p>
                    </div>
                </div>
                <div className="accordion d-flex mt-4 mb-8 col-12 flex-wrap justify-content-between" id="questionsAccordion">
                    <div className="row">
                        {answeredQuestions}
                    </div>
                </div>
            </div>
            <div className="w-10 d-flex z-3 flex-column mb-lg-3 mb-sm-8 col-11 align-items-end position-fixed end-0 me-1 bottom-0">
                <div className="text-left">
                    <button className="my-2 border-0 bg-white rounded-3 fs-6 p-md-3 p-sm-2"><i className="bx bxs-phone display-7 text-danger " data-bs-toggle="tooltip" data-bs-placement="top" title="Get Contact Details" /></button>
                </div>
                <div className="text-left">
                <button className="my-2 border-0 bg-white rounded-3 fs-6 p-md-3 p-sm-2"><i className="bx bxs-crown display-7 text-danger " data-bs-toggle="tooltip" data-bs-placement="top" title="Go Premium"/></button>
                </div>
            </div>
        </div>
    );
}
