import React from "react";
import Collapsibles from "@/components/profile/Collapsibles";

export default function ProfileDetails() {
    const maxQuestions = 11;
    let answeredQuestions = [];

    // Generate the Featured components dynamically
    for (let i = 0; i < maxQuestions; i++) {
        answeredQuestions.push(
            <div key={i} className="col-md-6 col-12">
                <Collapsibles name={"Religion and Tribe"} question={"Do you believe in God?"} answer={"Yes. I believe in God"} identity={i} ariaId={"headingOne"}/>
            </div>
        );
    }

    return (
        <div className="card border-0 overflow-y-scroll overflow-x-hidden mh-100 h-100 rounded-0 card-common">
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
            <div class="w-10 d-flex flex-column mb-3 col-11 align-items-end position-fixed end-0 me-1 bottom-0">
                <div class="text-left">
                    <button class="my-2 border-0 bg-dark rounded-3 fs-6 text-white p-md-3 p-sm-2" data-bs-toggle="tooltip" data-bs-placement="top" title="View Safety Tips"><i className="bx bxs-shield text-danger display-7"/></button>
                </div>
            </div>
        </div>
    );
}
