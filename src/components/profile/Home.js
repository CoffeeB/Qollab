import React from 'react'
import { Featured, FeaturedExtended, Top } from '@/components/profile/ProfileCards'
import Footer from '@/components/profile/Footer';
import SideCard from '@/components/profile/SideCards';
import SectionHead from '@/components/profile/SectionHead';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home({ userImage, userAge, userName, cardName, className }) {
    const router = useRouter();

    const viewUserProfile = () => {
        router.push('/viewProfile');
    }

    const createFeaturedProfilesExtended = () => {
        const maxDispalyedProfiles = 18;
        let featuredProfilesExtended = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < maxDispalyedProfiles; i++) {
            featuredProfilesExtended.push(
                <React.Fragment key={i}>
                    <div key={i} className='row d-md-none d-block p-0 px-1'>
                        <FeaturedExtended userImage={userImage} performAction={viewUserProfile}/>
                    </div>
                </React.Fragment>
            );
        }
        return featuredProfilesExtended;
    }
    
    const createFeaturedProfiles = () => {
        const maxDispalyedProfiles = 18;
        let featuredProfiles = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < maxDispalyedProfiles; i++) {
            featuredProfiles.push(
                <React.Fragment key={i}>
                    <div key={i} className='col-lg-2 col-md-4 d-md-block d-none p-0 px-1'>
                        <Featured userImage={userImage} performAction={viewUserProfile}/>
                    </div>
                </React.Fragment>
            );
        }
        return featuredProfiles;
    }

    const createTopProfiles = () => {
        const totalDispalyedProfiles = 6;
        let topProfiles = [];

        // Generate the SideCard components dynamically
        for (let i = 0; i < totalDispalyedProfiles; i++) {
            topProfiles.push(
                <React.Fragment key={i}>
                    <div key={i} className='col-lg-2 col-md-4 d-md-block d-none p-0 px-1'>
                        <Top userImage={userImage} performAction={viewUserProfile} />
                    </div>
                </React.Fragment>
            );
        }
        return topProfiles;
    }
    
    // const createTopProfilesExtended = () => {
    //     const totalDispalyedProfiles = 6;
    //     let topProfilesExtended = [];

    //     // Generate the SideCard components dynamically
    //     for (let i = 0; i < totalDispalyedProfiles; i++) {
    //         topProfilesExtended.push(
    //             <React.Fragment key={i}>
    //                 <div key={i} className='d-md-none d-block p-0 px-1'>
    //                     <TopExtended userImage={userImage} performAction={viewUserProfile} />
    //                 </div>
    //             </React.Fragment>
    //         );
    //     }
    //         return topProfilesExtended;
    // }

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
    <div className="row pt-lg-5 ps-3 mt-lg-3 pt-sm-0 mt-sm-0 pe-0">

        <div className="col-lg-9 p-0 col-sm-12">
            <div className="card border-0 py-lg-5 py-sm-0 pb-sm-10 rounded-0 card-common overflow-auto overflow-x-hidden vh-100">
                <div className="card-body pe-sm-2">
                    <div className="d-flex flex-column">
                        <div className="text-center mt-lg-10 mt-sm-0 d-flex flex-column align-items-center">
                            <div className='d-flex flex-column align-items-center'>
                                <a className='text-danger text-left fs-2 fw-bold'>Relationship with Reasns</a>
                                <span className='text-light text-center w-65 fs-6'>Find an instant friend, Choose from a list of social butterflies below</span> 
                            </div>
                        </div>
                        <div onClick={viewUserProfile} className='position-relative d-flex mt-6 flex-column align-items-center'>
                            <Image src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-4" width={500} height={500} />
                            <div className="position-absolute bottom-0 start-0 bg-transparent fs-5 p-3 w-lg-50 sm-w-100">
                                <div className='text-uppercase mt-3 bg-danger w-lg-60 sm-w-100 px-3 fs-6 badge'>Reasns Profile of the day</div>
                                <div className='mt-3 d-grid bg-black-2 p-3 fs-5 w-lg-60 sm-w-100'>
                                    <span className='fw-bold text-uppercase'>Luciana Peters, 24</span>
                                    <span className=''>Gwarimpa, Abuja</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row ps-3'>
                        {createFeaturedProfiles()}
                        {createFeaturedProfilesExtended()}
                    </div>
                    <div className='row border-4 ms-lg-2 my-2 border-start border-danger px-0 d-md-block d-none'>
                        <SectionHead text={"Top Models"}/>
                    </div>
                    <div className='row ps-3'>
                        {createTopProfiles()}
                        {/* {createTopProfilesExtended()} */}
                    </div>
                </div>
                <Footer className="d-none d-md-block" />
            </div>
        </div>
    
        <div className="col-lg-3 d-lg-block p-0 px-0 d-none">
            <div className="card col-12 py-5 pt-0 border-0 mh-100 h-100 rounded-0 card-common overflow-auto">
                <div className="card-body px-3 pt-3">
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
