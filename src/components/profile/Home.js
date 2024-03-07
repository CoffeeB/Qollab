import React from 'react'
import { Featured, Top } from '@/components/profile/ProfileCards'
import Footer from '@/components/profile/Footer';
import SideCard from '@/components/profile/SideCards';
import SectionHead from '@/components/profile/SectionHead';
import { useRouter } from 'next/router';

export default function Home({ userImage, userAge, userName, cardName }) {
    const router = useRouter();

    const viewUserProfile = () => {
        router.push('/viewProfile');
    }

    const createFeaturedProfiles = () => {
        const maxDispalyedProfiles = 18;
        let featuredProfiles = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < maxDispalyedProfiles; i++) {
            featuredProfiles.push(
                <React.Fragment key={i}>
                    <div key={i} className='col-lg-2 col-md-4 col-sm-12 p-0 px-1'>
                        <Featured userImage={userImage} performAction={viewUserProfile}/>
                    </div>
                </React.Fragment>
            );
            return featuredProfiles;
        }
    }

    const createTopProfiles = () => {
        const totalDispalyedProfiles = 6;
        let topProfiles = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < totalDispalyedProfiles; i++) {
            topProfiles.push(
                <React.Fragment key={i}>
                    <div key={i} className='col-lg-2 col-md-4 col-sm-12 p-0 px-1'>
                        <Top userImage={userImage} performAction={viewUserProfile} />
                    </div>
                </React.Fragment>
            );
            return topProfiles;
        }
    }

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
    }

    return (
    <div className="row pt-5 mt-3">
                
        <div className="col-9 p-0">
            <div className="card border-0 py-5 rounded-0 card-common overflow-auto contain-info">
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <div className="text-center mt-10 d-flex flex-column align-items-center">
                            <div className='d-flex flex-column align-items-center'>
                                <a className='text-danger text-left fs-2 fw-bold'>Relationship with Reasns</a>
                                <span className='text-light text-center w-65 fs-6'>Find an instant friend, Choose from a list of social butterflies below</span> 
                            </div>
                        </div>
                        <div onClick={viewUserProfile} className='position-relative d-flex mt-6 flex-column align-items-center'>
                            <img src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-4" />
                            <div className="position-absolute bottom-0 start-5 translate-middle-x bg-transparent fs-5 p-3 w-50">
                                <div className='text-uppercase mt-3 bg-danger w-60 px-3 fs-6 badge'>Reasns Profile of the day</div>
                                <div className='mt-3 d-grid bg-black-2 p-3 fs-5 w-60'>
                                    <span className='fw-bold text-uppercase'>Luciana Peters, 24</span>
                                    <span className=''>Gwarimpa, Abuja</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row ps-3 align-items-center flex-wrap'>
                        {createFeaturedProfiles()}
                    </div>
                    <div className='row border-4 ms-lg-2 my-2 border-start border-danger px-0 align-items-center flex-wrap'>
                        <SectionHead text={"Top Models"}/>
                    </div>
                    <div className='row ps-3 align-items-center flex-wrap'>
                        {createTopProfiles()}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    
        <div className="col-3 p-0 px-0">
            <div className="card col-12 py-5 pt-0 border-0 h-100 rounded-0 card-common overflow-auto contain-info">
                <div className="card-body px-3 pt-0">
                    <div>
                        <div className="text-left text-secondary">
                            {createSideCards()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
