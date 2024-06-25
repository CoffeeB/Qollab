import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className="navbar border-0 navbar-light fixed-top navbar-expand-lg py-3">
        <div className="w-100">
          <button className="navbar-toggler border-0 mx-3 offcanvas-nav-btn float-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
            <i className="bx bx-menu text-dark"/>
          </button>

          <div className="offcanvas offcanvas-start offcanvas-nav bg-black" id="offcanvasNav" >
            <div className="offcanvas-header">
              <a href="../../index.html" className="text-inverse"><Image src="/logo.png" alt="" width={20} height={20}/></a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
              </button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center justify-content-end">
              <ul className="navbar-nav align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-opacity-100" aria-current="page" href="">How it works</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-opacity-100" href="">Post an item</Link>
                </li>
                <li className="nav-item bg-secondary bg-opacity-25 nav-pills rounded-pill">
                  <Link className="nav-link fs-5 text-dark" href="">Login or Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
