import React from "react";
import Logo from "@/components/general/Logo";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark fixed-top navbar-expand-lg py-5 w-100">
        <div className="container px-3 my-2">
          <Logo />
          <button className="navbar-toggler border-0 me-3 offcanvas-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
            <i className="bx bx-menu"/>
          </button>

          <div className="offcanvas offcanvas-start offcanvas-nav bg-dark" id="offcanvasNav" >
            <div className="offcanvas-header">
              <a href="../../index.html" className="text-inverse"><Image src="/assets/images/logo/logo.svg" alt="" width={20} height={20}/></a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
              </button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center">
              <ul className="navbar-nav mx-auto align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link fs-5" aria-current="page" href="/onboarding">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" href="/">Profiles</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" href="/landing">Log in / Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
