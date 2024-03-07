import React from 'react'
import { Heading } from '@/components/profile/ProfileProps'

export default function ProfileUpperSect({ premiumMember }) {
  return (
    <div className="text-left d-grid text-secondary">
        <div className='d-flex justify-content-between'>
            <Heading className='text-danger' text={'Profile'} />
        </div>
        <div className='position-relative d-flex mt-6 flex-column align-items-center'>
            <img src="/Blank_Profile.jpg" alt="avatar" className="avatar avatar-xxl rounded-circle" />
            {premiumMember && (<span className="position-absolute bottom-0 start-50 translate-middle-x badge fs-5 p-3 bg-danger-2 w-75">Premium Member</span>)}
        </div>
    </div>
  )
}
