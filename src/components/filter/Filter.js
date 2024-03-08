import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import SideCard from '../profile/SideCards';
import { useRouter } from 'next/router';
import SectionHead from '@/components/profile/SectionHead';
import Filters from '@/components/filter/Filters';

export default function Filter({ userImage, userName, userAge, cardName, filters }) {
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
            {/* Left column with Filters */}
            <div className="col-5 p-0">
                <div className="border-0 rounded-0 card-common overflow-auto contain-info">
                    <div className="card-body px-3">
                        <Filters filters={filters}/>
                        <div className="clearfix mt-3">
                            <div className="input-group mb-0">
                                <button className="input-group-text bg-danger py-2 cursor-pointer rounded-4 w-50 fw-bold">APPLY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right column with SideCards */}
            <div className="col-7 pt-0">
                <div className="card pb-9 pt-0 px-6 border-0 rounded-0 card-common overflow-auto contain-info">
                    <div className="card-body pt-0">
                        <div>
                            <div className="text-left text-secondary">
                                {/* Render SideCards */}
                                {createSideCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Define prop type validations after the component declaration
Filter.propTypes = {
    userImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userAge: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    filters: PropTypes.array.isRequired,
};
