import React from 'react'
import { Heading, Save } from '@/components/profile/ProfileProps'
import Image from 'next/image'

export default function EditUpper({handleStepChange}) {
  return (
    <div className="text-left d-grid text-secondary">
        <div className='d-flex align-items-center justify-content-between'>
            <Heading className='text-danger' text={'Profile'} />
            <Save className='text-danger' performAction={() => handleStepChange('details')} text={'Save'} />
        </div>
        <div className='d-flex my-3 flex-column align-items-center'>
            <Image src="/Blank_Profile.jpg" alt="avatar" className="avatar avatar-xxl rounded-circle" width={20} height={20}/>
            <a className='text-danger fs-3 mt-3'>Edit Photo</a>
        </div>
    </div>
  )
}
