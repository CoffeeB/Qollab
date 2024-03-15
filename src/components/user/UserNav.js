import React from "react";
import Logo from "@/components/general/Logo";
import Image from "next/image";

export default function UserNav({ text }) {
    return (
        <>
            <nav className="navbar border-bottom border-light border-2 navbar-expand navbar-light topbar fixed-top shadow">
                <div className="container-fluid">
                    <div className="d-grid w-100">
                        <span className="navbar-text text-danger ms-10 fw-bold fs-2">{text}</span>
                    </div>
                    <button className="navbar-toggler offcanvas-nav-btn" type="button">
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="offcanvas offcanvas-start offcanvas-nav">
                        <div className="offcanvas-header">
                            <a href="../../index.html" className="text-inverse">
                                <Image src="/assets/images/logo/logo.svg" alt="" width={30} height={30}  />
                            </a>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
