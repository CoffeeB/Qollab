import React from "react";
import Collapsibles from "@/components/profile/Collapsibles";

export default function ViewedProfileDetails() {
    const maxQuestions = 11;
    let answeredQuestions = [];

    // Generate the Featured components dynamically
    for (let i = 0; i < maxQuestions; i++) {
        answeredQuestions.push(
            <div key={i} className="col-6">
                <Collapsibles name={"Religion and Tribe"} question={"Do you believe in God?"} answer={"Yes. I believe in God"} identity={i} ariaId={"headingOne"}/>
            </div>
        );
    }

    return (
        <div className="card border-0 overflow-y-auto overflow-x-hidden mh-100 h-100 rounded-0 card-common">
            <div className="card-body row">
                <div className="d-flex col-12 flex-wrap justify-content-between">
                    <div className="text-left text-secondary">
                        <p>
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
            <div className="w-10 d-flex flex-column mt-8 mb-8 col-11 align-items-end fixed-btn">
                <div className="text-left text-secondary">
                    <button className="my-2 border border-2 bg-danger rounded-3 fs-6 text-white p-5 py-3">Get Contact Details</button>
                </div>
                <div className="text-left text-secondary">
                    <button className="my-2 border border-2 bg-danger rounded-3 fs-6 text-white p-5 py-3">Go Premium</button>
                </div>
            </div>
        </div>
    );
}
