import React, {  } from 'react';
import Nav from '@/components/default/Nav'
import Image from 'next/image';

export default function listing() {

  return (
    <>
      {/* logged in nav */} 
      
      {/* logged out nav */}
      <Nav />


      {/* landing */}
      <section className="container-fluid pt-10">
        <div className='row m-0 justify-content-center py-3'>
            <form className='col-md-8 rounded bg-white p-3 h-100'>
                <h4 className='text-dark'>Add New Listing</h4>
                <div className='bg-secondary rounded p-3 bg-opacity-10 h-100'>
                    <div>
                        <h5 className='text-dark'>Add Photos</h5>
                        <div className='row m-0'>
                            <div className='col-3 p-3'>
                                <div className='bg-secondary bg-opacity-10 rounded d-flex flex-column align-items-center justify-content-center' style={{height: "150px"}}>
                                    <i className='bx bxs-camera fs-1 text-dark opacity-25' />
                                </div>
                            </div>
                            <div className='col-3 p-3'>
                                <div className='bg-secondary bg-opacity-10 rounded d-flex flex-column align-items-center justify-content-center' style={{height: "150px"}}>
                                    <i className='bx bxs-camera fs-1 text-dark opacity-25' />
                                </div>
                            </div>
                            <div className='col-3 p-3'>
                                <div className='bg-secondary bg-opacity-10 rounded d-flex flex-column align-items-center justify-content-center' style={{height: "150px"}}>
                                    <i className='bx bxs-camera fs-1 text-dark opacity-25' />
                                </div>
                            </div>
                            <div className='col-3 p-3'>
                                <div className='bg-secondary bg-opacity-10 rounded d-flex flex-column align-items-center justify-content-center' style={{height: "150px"}}>
                                    <i className='bx bxs-camera fs-1 text-dark opacity-25' />
                                </div>
                            </div>
                            <div className='px-3 d-flex justify-content-between'>
                                <a className='text-dark opacity-50 fs-5'>Cover Picture</a>
                                <a className='text-dark opacity-50 fs-5'>Click to reorder, crop or add photos</a>
                            </div>
                        </div>
                        <div className='p-3'>
                            <label className='form-label text-dark' htmlFor='title'>Listing Title e.g(.......)</label>
                            <input id='title' name="title" className='form-control border-secondary px-4 text-dark' placeholder='Enter listing title' type='text' />
                        </div>
                        <div className='p-3'>
                            <label className='form-label text-dark' htmlFor='category'>Select a category</label>
                            <select id='category' name="category" className='form-select border-secondary px-4 text-dark' placeholder='Enter listing title' type='text' >
                                <option className='text-white' selected disabled>Select a category</option>
                            </select>
                        </div>
                        <div className='p-3'>
                            <label className='form-label text-dark' htmlFor='desc'>Description</label>
                            <textarea id='desc' name="desc" rows={5} className='form-control border-secondary px-4 text-dark' placeholder='Enter listing title' />
                        </div>
                        <div className="p-3 col-4">
                            <label htmlFor="postalCode" className="form-label text-dark">Postal Code</label>
                            <input type="text" name="postalCode" placeholder="Enter postal code" className="form-control w-100 border-secondary text-dark" id="postalCode" />
                        </div>
                        <div className='p-3 row m-0'>
                            <h5 className='text-dark'>Rental price (N) per:</h5>
                            <div className='col-3'>
                                <label className='form-label text-dark' htmlFor='day'>Day</label>
                                <input id='day' name="day" className='form-control border-secondary px-4 text-dark' placeholder='Enter amount per day' type='text' />
                            </div>
                            <div className='col-3'>
                                <label className='form-label text-dark' htmlFor='week'>Week</label>
                                <input id='week' name="week" className='form-control border-secondary px-4 text-dark' placeholder='Enter amount per week' type='text' />
                            </div>
                            <div className='col-3'>
                                <label className='form-label text-dark' htmlFor='month'>Month</label>
                                <input id='month' name="month" className='form-control border-secondary px-4 text-dark' placeholder='Enter amount per month' type='text' />
                            </div>
                        </div>
                        <div className='p-3 row m-0'>
                            <div className='col-3'>
                                <label className='form-label text-dark' htmlFor='itemValue'>Item Value (N)</label>
                                <input id='itemValue' name="itemValue" className='form-control border-secondary px-4 text-dark' placeholder='Enter item value' type='text' />
                            </div>
                            <div className='col-3'>
                                <label className='form-label text-dark' htmlFor='rentalDays'>Minimum rental days</label>
                                <input id='rentalDays' name="rentalDays" className='form-control border-secondary px-4 text-dark' placeholder='Enter number of days' type='text' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end align-items-center pt-3'>
                    <button type='button' className='border-0 bg-secondary bg-opacity-50 py-2 px-3 rounded-pill'>Cancel listing</button> &nbsp;
                    <button type='button' className='border-0 bg-primary py-2 px-3 rounded-pill'>List my item now</button>
                </div>
            </form>
        </div>
      </section>
      {/* end of landing */}
    </>
  );
}

