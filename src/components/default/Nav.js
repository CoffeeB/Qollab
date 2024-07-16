import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
      <nav className="navbar border-0 navbar-light fixed-top navbar-expand-lg pt-3 bg-transparent shadow-none justify-content-center">
        <div className="rounded-5 p-3 bg-primary w-md-75 w-100">
          <button className="navbar-toggler border-0 mx-3 offcanvas-nav-btn float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
            <i className="bx bx-menu"/>
          </button>

          <div className="offcanvas offcanvas-start offcanvas-nav bg-black" id="offcanvasNav" >
            <div className="offcanvas-header">
              <a href="../../index.html" className="text-inverse"><Image src="/logo.png" alt="" width={20} height={20}/></a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
              </button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center justify-content-between">
              <ul className="navbar-nav align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-opacity-100" href="">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-opacity-100" aria-current="page" href="">How it works</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-opacity-100" href="">Browse items</Link>
                </li>
              </ul>
              <ul className="navbar-nav align-items-lg-center">
                <li className="nav-item bg-white nav-pills rounded-pill">
                  <Link className="nav-link fs-5 text-dark" href="">List an item</Link>
                </li>
                <div className="btn-group position-static ms-2">
                  <button type="button" className="rounded-5 rounded-end-0 p-1 border-0 bg-dark bg-opacity-50">
                    <img src='/Blank_Profile.jpg' className="rounded-circle" style={{ width: "50px", height: "50px"}} />{" "}
                    <span className='text-white fw-medium'>James</span>
                  </button>
                  <button 
                    type="button" 
                    className="bg-dark bg-opacity-50 dropdown-toggle dropdown-toggle-split rounded-5 rounded-start-0 ps-0 pt-2 border-0" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu start-50 w-75">
                    <li className='px-2 py-1 '>
                      <a className='border-top-0 border-start-0 border-end-0 border border-grey dropdown-item d-flex aling-items-center justify-content-between px-1' href="#">
                        <span className="text-dark cursor-pointer">Inbox</span>
                        <i className='bx bx-chevron-right text-dark fs-3 ' />
                      </a>
                    </li>
                    <li className='px-2 py-1 '>
                      <a className='border-top-0 border-start-0 border-end-0 border border-grey dropdown-item d-flex aling-items-center justify-content-between px-1' href="#">
                        <span className="text-dark cursor-pointer">Rentals</span>
                        <i className='bx bx-chevron-right text-dark fs-3 ' />
                      </a>
                    </li>
                    <li className='px-2 py-1 '>
                      <a className='border-top-0 border-start-0 border-end-0 border border-grey dropdown-item d-flex aling-items-center justify-content-between px-1' href="#">
                        <span className="text-dark cursor-pointer">Favorites</span>
                        <i className='bx bx-chevron-right text-dark fs-3 ' />
                      </a>
                    </li>
                    <li className='px-2 py-1 '>
                      <a className='border-top-0 border-start-0 border-end-0 border border-grey dropdown-item d-flex aling-items-center justify-content-between px-1' href="#">
                        <span className="text-dark cursor-pointer">Profiles</span>
                        <i className='bx bx-chevron-right text-dark fs-3 ' />
                      </a>
                    </li>
                    <li className='px-2 py-1 '>
                      <a className='dropdown-item d-flex aling-items-center justify-content-between px-1' href="#">
                        <span className="text-dark cursor-pointer">My Items</span>
                        <i className='bx bx-chevron-right text-dark fs-3 ' />
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
