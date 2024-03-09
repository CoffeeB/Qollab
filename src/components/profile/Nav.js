import React from "react";
import Logo from "../general/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    return (
        <>
            <nav className="navbar z-4 d-none d-lg-block bg-dark navbar-expand navbar-light topbar fixed-top shadow">
                <div className="container-fluid">
                    <div className="d-grid w-100">
                        <span className="navbar-brand row ps-4 fs-3">
                            <Logo />
                        </span>
                    </div>
                    <button className="navbar-toggler offcanvas-nav-btn" type="button">
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="offcanvas offcanvas-start offcanvas-nav" style={{ width: "20rem" }}>
                        <div className="offcanvas-header">
                            <a href="../../index.html" className="text-inverse">
                                <img src="../../assets/images/logo/logo.svg" alt="" />
                            </a>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* /* sidebar | */}
            {           /* V */}
            <aside className="col-lg-1 d-none d-lg-block z-1 fixed-top mt-7 p-2 bg-dark border-end border-grey h-100">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark">

                  <div className="sidebar-heading mt-4">
                        <Link href='/profile'>
                            <div className={`${router.pathname === '/profile' ? 'border rounded-circle p-0':''}`}>
                                <img src="/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg" data-bs-toggle="tooltip" data-bs-placement="right" title="Profile" alt="avatar" className="avatar avatar-xl rounded-circle" />
                            </div>
                        </Link>
                  </div>
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading mb-5 mt-3">
                    <li className={`nav-item my-2 ${router.pathname === '/home' || router.pathname === '/viewProfile' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                        <Link href={'/home'} className="nav-link">
                            <i className="bx bxs-home-alt-2 display-6" />
                        </Link>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/filter' ? 'text-danger' : 'text-grey'}`} toggle="tooltip" placement="right" title="Filter">
                        <Link href={'/filter'} className="nav-link">
                            <i className="bx bx-slider-alt display-6" />
                        </Link>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/search' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Search">
                        <Link href={'/search'} className="nav-link">
                            <i className="bx bx-search-alt display-6" />
                        </Link>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/notifications' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Notifications">
                        <Link href={'/notifications'} className="nav-link">
                            <i className="bx bx-bell display-6" />
                        </Link>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/likes' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
                        <Link href={'/likes'} className="nav-link">
                            <i className="bx bx-heart display-6" />
                        </Link>
                    </li>
                  </div>

                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading">
                    {/* <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <Link href={"/login"} data-bs-toggle="tooltip" data-bs-placement="right" title="Log Out">
                            <i className="bx bx-log-out text-danger display-6" />
                        </Link>
                    </li>
                  </div>

                </ul>
            </aside>
        </>
    );
}

