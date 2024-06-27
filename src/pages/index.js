import React, {  } from 'react';
import Nav from '@/components/landing/Nav'
import Image from 'next/image';
export default function profile() {

  return (
    <>
      <Nav />

      {/* landing */}
      <section className="container-fluid pt-10">
        <div className='row m-0 justify-content-center'>
          <div className='col-md-5 px-6 py-5'>
            <h1 className='text-primary text-center fw-bolder'>Turn Your <span className='text-info'>Idle Purchases</span> into Earnings 💰.</h1>
            <p className='text-black text-center px-5'>Maximize the value of your belongings by renting them out when they're not in use, effortlessly and securely.</p>
          </div>
          <div className='col-md-8 d-flex align-items-center'>
            <div className='bg-info bg-opacity-10 rounded-pill p-3 w-md-75 d-flex flex-wrap flex-md-nowrap justify-content-between'>
              <div className='input-group w-md-75 w-100 my-1 px-md-3'>
                <input type="text" className='form-control rounded-pill ps-3 pe-10 text-black  border-secondary border-opacity-10' placeholder='Search for items...'/>
                <button type='button' className='position-absolute end-0 mx-md-3 px-5 py-2 bg-primary border-0 rounded-pill' >Search</button>
              </div>
              <select class="form-select w-md-50 w-100 my-1 rounded-pill text-black border-secondary border-opacity-10" aria-label="Default select example">
                <option selected disabled>Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='px-3 my-1 d-flex align-items-center'>
              <span className='text-black mx-2'>Or</span>
              <button className='rounded-pill p-2 bg-transparent border-secondary text-dark'>Post an item now</button>
            </div>
          </div>
        </div>
      </section>
      {/* end of landing */}
    </>
  );
}

