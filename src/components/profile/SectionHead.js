import React from 'react'

export default function SectionHead({ text }) {
  return (
    <div class="position-relative bg-transparent ps-0 ">
        <div class="fs-sm fw-medium text-dark px-0 ps-sm-3">
            <p className='px-0 mb-2'>{text}</p>
        </div>
    </div>
  )
}
