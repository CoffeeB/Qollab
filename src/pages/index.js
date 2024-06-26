import React, {  } from 'react';
import Nav from '@/components/landing/Nav'
export default function profile() {

  return (
    <>
      <Nav />

      {/* landing */}
      <section className="container-fluid">
        <div className='card border-0 z-0 bg-transparent p-10 position-relative'>
          <div className='d-flex'>
            <div className='row m-0 justify-content-center flex-column'>
              <div className='col-6'>
                <h1 className='text-primary fw-bold'>Rent <span className='text-info-emphasis'>anything</span> from people in your area</h1>
                <p className='my-2 text-black-50'>Rent almost anything from people nearby for jobs at home, fun experiences or work.</p>
              </div>
              <div className="mt-6 mb-5 col-8">
                <div className="input-group">
                  <div className="position-absolute start-0">
                    <i className='bx bx-search fs-2 ps-3 pt-2 text-grey' />
                  </div>
                  <input 
                    type="text" 
                    className=" shadow border-0 form-control form-control-lg ps-7 pe-9 py-3 fs-6 rounded-5" 
                    placeholder="Bikes, drones, cameras..." 
                    aria-label="Search..."
                  />
                  <div className="position-absolute end-0">
                    <a className='bg-primary text-white rounded-pill mx-2 p-2 fs-6'>search</a>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-start m-0'>
                <span className='text-black fs-5'>Or</span>
                <a className='rounded-pill bg-secondary bg-opacity-10 text-black py-2 px-3 ms-3'>Post an item</a>
              </div>
            </div>
          </div>
        </div>
        <div className='card bg-transparent border-0'>
          <div className='d-flex'>
            <div className='row m-0'>
              <div className='col-auto'>
                <h3 className='text-primary text-start'>500,000+</h3>
                <p className='fs-6 text-end'>Community</p>
              </div>
              <div className='col-auto'>
                <h3 className='text-primary text-center'>200,000+</h3>
                <p className='fs-6 text-end'>Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of landing */}

      {/* feedback */}
      <section className='container-fluid pt-10'>
        <div className='d-flex'>
          <h2 className='text-primary'>And a whole lot of love for sharing</h2>
        </div>
      </section>
    </>
  );
}

