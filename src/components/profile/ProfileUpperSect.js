import React, {useState} from 'react'
import { Heading } from '@/components/profile/ProfileProps'
import Modal from '../general/Modal'

export default function ProfileUpperSect({ premiumMember }) {
  const [ showLoginModal, setShowLoginModal ] = useState(false);

  const handleModal = () => {
    setShowLoginModal(true);
  }

  const handleLogin = () => {
      router.push('/login');
  }

  return (
    <>
      <div className="text-left d-grid text-secondary">
        <div className='row justify-content-between align-items-center'>
          <Heading className='text-danger col-4 fw-bold ps-lg-0 ps-sm-3' text={'Profile'} />
          <ul className="navbar-nav col-8 flex-row justify-content-end bg-gradient-primary sidebar sidebar-dark">
            <li className="nav-item col-2 my-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Notifications">
              <a onClick={handleModal} className="nav-link border-0">
                <i className="bx bx-bell display-6" />
              </a>
            </li>
            <li className="nav-item col-2 my-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
              <a onClick={handleModal} className="nav-link border-0">
                <i className="bx bx-heart display-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className='position-relative d-flex mt-6 flex-column align-items-center'>
          <img src="/Blank_Profile.jpg" alt="avatar" className="avatar avatar-xxl rounded-circle" />
          {premiumMember && (<span className="position-absolute bottom-0 start-50 translate-middle-x badge fs-5 p-3 bg-danger-2 w-75">Premium Member</span>)}
        </div>
      </div>
      <Modal
        heading={'Please Login to Continue'}
        headingClass={'fs-3'}
        secondText={'!!!'}
        firstBtnText={'Login'}
        secondBtnText={'Cancel'}
        firstBtnClass={'bg-success'}
        secondTextClass={'text-danger fs-3 fw-bold'}
        setShowLoginModal={setShowLoginModal}
        handleLogin={handleLogin}
        showLoginModal={showLoginModal} 
      />
    </>
  )
  
}
