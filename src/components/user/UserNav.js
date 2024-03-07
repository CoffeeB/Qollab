import React from "react";
import Logo from "@/components/general/Logo";

export default function UserNav({ text }) {
    return (
        <>
            <nav className="navbar border-bottom border-light border-2 navbar-expand navbar-light topbar fixed-top shadow">
                <div className="container-fluid">
                    <div className="d-grid w-100">
                        <span className="navbar-brand d-flex align-items-center fs-3">
                            <Logo />
                            Reasns
                        </span>
                        <span className="navbar-text text-danger ms-10 fw-bold fs-2">{text}</span>
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
        </>
    );
}
