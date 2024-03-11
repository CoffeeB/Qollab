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
        <div className="card border-0 overflow-y-auto overflow-x-hidden pt-lg-5 pt-sm-0 mh-100 h-100 rounded-0 card-common">
            <div className="card-body row">
                <div className="d-flex col-12 flex-wrap justify-content-between">
                    <div className="text-left text-secondary">
                        <p className="fs-sm-6">
                            Go through My Summarised Biography and if you Would Like To Take Know Me More, let's go on a Date. You can Request for my Contacts At The Bottom Of my Page 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="accordion" id="questionsAccordion">
                            {answeredQuestions}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-10 d-flex flex-column mb-3 col-11 align-items-end position-fixed end-0 me-1 bottom-0">
                <div class="text-left">
                    <button class="my-2 border-0 bg-success rounded-3 fs-6 text-white p-md-3 p-sm-2"><i className="bx bxs-phone display-7" data-bs-toggle="tooltip" data-bs-placement="top" title="Get Contact Details" /></button>
                </div>
                <div class="text-left">
                <button class="my-2 border-0 bg-warning rounded-3 fs-6 text-white p-md-3 p-sm-2"><i className="bx bxs-crown display-7" data-bs-toggle="tooltip" data-bs-placement="top" title="Go Premium"/></button>
                </div>
            </div>
        </div>
    );
}
