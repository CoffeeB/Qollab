import React from "react";
import Logo from "@/components/general/Logo";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-light fixed-top navbar-expand-lg my-3 ms-4 w-100">
        <div className="container px-3 my-2">
          <Logo />
          <button className="navbar-toggler offcanvas-nav-btn" type="button">
            <i className="bi bi-list"></i>
          </button>

          <div className="offcanvas offcanvas-start offcanvas-nav" style={{ width: "20rem" }}>
            <div className="offcanvas-header">
              <a href="../../index.html" className="text-inverse"><img src="../../assets/images/logo/logo.svg" alt="" /></a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center">
              <ul className="navbar-nav mx-auto align-items-lg-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Profiles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log in / Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
