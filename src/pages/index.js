import React, {  } from 'react';
import Nav from '@/components/landing/Nav'
import Image from 'next/image';
export default function profile() {

  return (
    <>
      <Nav />

      {/* landing */}
      <section className="container-fluid py-10" style={{zIndex: 10}}>
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

      <section className='container-fluid bg-info py-5 position-relative' >
        <div className='d-flex flex-column align-items-center position-relative' style={{zIndex: "10 !important"}}>
          <h3 className='text-black mb-5'>Discover the Qollab Advantage</h3>
          <div className='row m-0 justify-content-center'>
            <div className='col-5 p-3'>
              <div className='card position-relative border-0 w-100' style={{height: "400px"}}>
                <div class="card-body overflow-hidden p-0 ps-3 pt-5">
                  <h2 class="card-title text-black pe-6 w-75">Monetize your Idle Purchases 💸</h2>
                  <p class="card-text text-black pe-3">Turn your unused belongings into a revenue stream by renting them out through Qollab to others in your community.</p>
                  <Image width={350} height={200} src="/Blank_Profile.jpg" alt="img" className="float-end rounded-top-0 rounded-start-0 rounded position-absolute bottom-0 end-0" />
                  <div className='position-absolute d-flex bottom-0 p-2'>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Monetize</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Revenue Stream</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5 p-3'>
              <div className='card position-relative border-0 w-100' style={{height: "400px"}}>
                <div class="card-body overflow-hidden p-0 ps-3 pt-5">
                  <h2 class="card-title text-black pe-6 w-75">Supporting Sustainable Practices ♻️</h2>
                  <p class="card-text text-black pe-3">By participating in the sharing economy through Qollab, you're actively promoting the reuse of resources, contributing to a more sustainable future.</p>
                  <Image width={350} height={200} src="/Blank_Profile.jpg" alt="img" className="float-end rounded-top-0 rounded-start-0 rounded position-absolute bottom-0 end-0" />
                  <div className='position-absolute d-flex bottom-0 p-2'>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Recycle</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Sustainability</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Sharing economy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5 p-3'>
              <div className='card position-relative border-0 w-100' style={{height: "400px"}}>
                <div class="card-body overflow-hidden p-0 ps-3 pt-5">
                  <h2 class="card-title text-black pe-6 w-75">Owner Protection 🔒</h2>
                  <p class="card-text text-black pe-3">Qollab offers up to 10,000,000 naira per item in owner protection, ensuring that your investments are safeguarded against damages or loss during rental periods.</p>
                  <Image width={350} height={200} src="/Blank_Profile.jpg" alt="img" className="float-end rounded-top-0 rounded-start-0 rounded position-absolute bottom-0 end-0" />
                  <div className='position-absolute d-flex bottom-0 p-2'>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Secured</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Insurance</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Owner Protection</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5 p-3'>
              <div className='card position-relative border-0 w-100' style={{height: "400px"}}>
                <div class="card-body overflow-hidden p-0 ps-3 pt-5">
                  <h2 class="card-title text-black pe-6 w-75">Verified Borrowsers ✅</h2>
                  <p class="card-text text-black pe-3">Rest assured knowing that renters on Qollab are vetted and verified, enhancing trust and security in your rental transactions.</p>
                  <Image width={350} height={200} src="/Blank_Profile.jpg" alt="img" className="float-end rounded-top-0 rounded-start-0 rounded position-absolute bottom-0 end-0" />
                  <div className='position-absolute d-flex bottom-0 p-2'>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Verified</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Vetted</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Secured</a>
                    <a href="#" class="card-link bg-info bg-opacity-75 text-black rounded-pill p-2">Trust</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-circle h-auto rounded-bottom-0 w-100 position-absolute translate-middle-y z-0 pt-10 h-100" style={{height:"300px", background: "#defdf9", zIndex: 1}}></div>
      </section>

      <section className='container-fluid py-5'>
        <div className='d-flex flex-column align-items-center'>
          <h3 className='text-black mb-5'>Explore Our Categories</h3>
          
        </div>
      </section>
    </>
  );
}

