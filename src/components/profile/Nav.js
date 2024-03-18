import React, { useState } from "react";
import Logo from "../general/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import Modal from "../general/Modal";
import Image from "next/image";


export default function Nav() {
    const router = useRouter();
    const [ showModal, setShowModal ] = useState(false);
    const {isAuthenticated, logout} = useAuth();

    const handleLogin = () => {
        router.push('/login');
    }

    const handleModal = () => {
        setShowModal(true);
    }

    const handleLogOut = () => {
        logout();
        router.push('/login');
    }

    return (
        <>
            <nav className="navbar z-4 d-none d-lg-block bg-dark navbar-expand navbar-light topbar fixed-top shadow">
                <div className="container-fluid">
                    <div className="d-grid w-100">
                        <span className="navbar-brand row ps-4 fs-3">
                            <Logo />
                        </span>
                    </div>
                </div>
            </nav>
            {/* /* sidebar | */}
            {           /* V */}
            {isAuthenticated ? (<aside className="col-lg-1 d-none d-lg-block z-1 fixed-top mt-6 p-2 pt-4 bg-dark border-end border-grey h-100">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark">

                  <div className="sidebar-heading mt-4">
                        <Link href='/profile'>
                            <div className={`${router.pathname === '/profile' ? 'border rounded-circle p-0':''}`}>
                                <Image src="/Blank_Profile.jpg" data-bs-toggle="tooltip" data-bs-placement="right" title="Profile" alt="avatar" className="avatar rounded-circle" width={500} height={500}/>
                            </div>
                        </Link>
                  </div>
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading mb-6 mt-4">
                    <li className={`nav-item my-2 ${router.pathname === '/' || router.pathname === '/viewProfile' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                        <Link href={'/'} className="nav-link">
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
                        <a data-bs-toggle="tooltip" data-bs-placement="right" title="Log Out" onClick={handleLogOut}>
                            <i className="bx bx-log-out text-danger display-6" />
                        </a>
                    </li>
                  </div>

                </ul>
            </aside> ) : (<aside className="col-lg-1 d-none d-lg-block z-1 fixed-top mt-7 p-2 bg-dark border-end border-grey h-100">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark">

                  <div className="sidebar-heading mt-4">
                        <a onClick={handleModal}>
                            <div className={`${router.pathname === '/profile' ? 'border rounded-circle p-0':''}`}>
                                <Image src="/Blank_Profile.jpg" data-bs-toggle="tooltip" data-bs-placement="right" title="Profile" alt="avatar" className="avatar avatar-lg rounded-circle" width={500} height={500} />
                            </div>
                        </a>
                  </div>
                  {/* <!-- Heading --> */}
                  <div className="sidebar-heading mb-6 mt-4">
                    <li className={`nav-item my-2 ${router.pathname === '/' || router.pathname === '/viewProfile' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                        <a onClick={handleModal} className="nav-link">
                            <i className="bx bxs-home-alt-2 display-6" />
                        </a>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/filter' ? 'text-danger' : 'text-grey'}`} toggle="tooltip" placement="right" title="Filter">
                        <a onClick={handleModal} className="nav-link">
                            <i className="bx bx-slider-alt display-6" />
                        </a>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/search' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Search">
                        <a onClick={handleModal} className="nav-link">
                            <i className="bx bx-search-alt display-6" />
                        </a>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/notifications' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Notifications">
                        <a onClick={handleModal} className="nav-link">
                            <i className="bx bx-bell display-6" />
                        </a>
                    </li>
                    <li className={`nav-item my-2 ${router.pathname === '/likes' ? 'text-danger' : 'text-grey'}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
                        <a onClick={handleModal} className="nav-link">
                            <i className="bx bx-heart display-6" />
                        </a>
                    </li>
                  </div>

                </ul>
            </aside>)}

            <nav className="navbar py-1 fixed-bottom d-lg-none bg-dark navbar-light">
                {isAuthenticated ? (
                        <ul className="row mx-1 w-100 navbar-nav p-0 bg-gradient-primary sidebar sidebar-dark">
                            <div className="d-flex justify-content-between m-0">
                                <li className='nav-item' data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                                    <Link href={'/'} className="nav-link border-0 d-flex justify-content-center">
                                        <i className={`bx bxs-home-alt-2 display-6 ${router.pathname === '/' || router.pathname === '/viewProfile' ? 'text-danger' : 'text-grey'}`} />
                                    </Link>
                                </li>
                                <li className={`nav-item`} toggle="tooltip" placement="right" title="Filter">
                                    <Link href={'/filter'} className="nav-link border-0 d-flex justify-content-center">
                                        <i className={`bx bx-slider-alt display-6  ${router.pathname === '/filter' ? 'text-danger' : 'text-grey'}`} />
                                    </Link>
                                </li>
                                <li className={`nav-item`} data-bs-toggle="tooltip" data-bs-placement="right" title="Search">
                                    <Link href={'/search'} className="nav-link border-0 d-flex justify-content-center">
                                        <i className={`bx bx-search-alt display-6 ${router.pathname === '/search' ? 'text-danger' : 'text-grey'}`} />
                                    </Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
                                    <Link href={'/profile'} className="nav-link border-0 d-flex justify-content-center">
                                        <i className={`bx display-6 ${router.pathname === '/profile' ? 'bxs-user text-danger' : 'text-grey bx-user'}`} />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                ) : (
                    <ul className="row w-100 navbar-nav p-0 bg-gradient-primary sidebar sidebar-dark">
                        <div className="d-flex justify-content-between m-0 p-0">
                            <li className="nav-item col-3 mx-1" data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                                <a onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className="bx bxs-home-alt-2 display-6" />
                                </a>
                            </li>
                            <li className="nav-item col-3 mx-1" toggle="tooltip" placement="right" title="Filter">
                                <a onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className="bx bx-slider-alt display-6" />
                                </a>
                            </li>
                            <li className="nav-item col-3 mx-1" data-bs-toggle="tooltip" data-bs-placement="right" title="Search">
                                <a onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className="bx bx-search-alt display-6" />
                                </a>
                            </li>
                            {/* <li className="nav-item col-2 my-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Notifications">
                                <a onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className="bx bx-bell display-6" />
                                </a>
                            </li>
                            <li className="nav-item col-2 my-2" data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
                                <a onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className="bx bx-heart display-6" />
                                </a>
                            </li> */}
                            <li className="nav-item col-3 mx-1" data-bs-toggle="tooltip" data-bs-placement="right" title="Likes">
                                <a  onClick={handleModal} className="nav-link border-0 d-flex justify-content-center">
                                    <i className={`bx display-6 ${router.pathname === '/profile' ? 'bxs-user text-danger' : 'bx-user'}`} />
                                </a>
                            </li>
                        </div>
                    </ul>
                )}
            </nav>

            <Modal 
                heading={'Please Login to Continue'}
                headingClass={'fs-5'}
                firstBtnText={'Cancel'} 
                secondBtnText={'Continue'}
                firstBtnClass={'btn-secondary'}
                secondBtnClass={'btn-outline-success'} 
                secondTextClass={'text-danger fs-3 fw-bold'}
                setShowModal={setShowModal} 
                performAction={handleLogin} 
                showModal={showModal}
            />

        </>
    );
}

