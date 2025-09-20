"use client";
import React, { useState, useEffect } from "react";

import LogoDark from "../../public/assets/images/logo/logo-dark.png";
import LogoLight from "../../public/assets/images/logo/logo-white.png";
import serviceDetails from "@/public/data/pageInfo";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 20) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-sticky ${isSticky ? "is-sticky" : ""}`}>
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LogoDark} className="" alt="logo" />
              <img src={LogoLight} className="" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="ms-auto w-100 d-flex justify-content-end menu-on-hover">
                <ul
                  className={`navbar-nav navigation ${
                    menuOpen ? "d-lg-flex" : "d-lg-none"
                  }`}
                >
                  <li className="current-menu">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li className="has-child submenu-full">
                    <a href="#">Projects</a>
                    <ul className="submenu">
                      <li>
                        <ul className="submenu2">
                          <li>
                            <a href="#">
                              <img src="images/residential.jpg" />
                              <p className="mt-3 mb-0">Residential</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="submenu2">
                          <li>
                            <a href="#">
                              <img src="images/commercial.jpg" />
                              <p className="mt-3 mb-0">Commercial</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child ">
                    <a href="#">Services</a>
                    <ul className="submenu">
                      {serviceDetails.map((service) => (
                        <li key={service.id}>
                          <Link
                            className='a'
                            href={`/services/${service.slug}`}
                          >
                            {service.heading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div
                  className="linkOnHover text-white ps-5"
                  onClick={() => setMenuOpen(!menuOpen)}
                  role="button"
                  tabIndex={0}
                >
                  Menu
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <header className="">
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LogoDark} className="" alt="logo" />
              <img src={LogoLight} className="" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="ms-auto w-100 d-flex justify-content-end menu-on-hover">
                <ul
                  className={`navbar-nav navigation ${
                    menuOpen ? "d-flex" : "d-none"
                  }`}
                >
                  <li className="current-menu">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li className="has-child submenu-full">
                    <a href="#">Projects</a>
                    <ul className="submenu">
                      <li>
                        <ul className="submenu2">
                          <li>
                            <a href="#">
                              <img src="images/residential.jpg" />
                              <p className="mt-3 mb-0">Residential</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="submenu2">
                          <li>
                            <a href="#">
                              <img src="images/commercial.jpg" />
                              <p className="mt-3 mb-0">Commercial</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child ">
                    <a href="#">Services</a>
                    <ul className="submenu">
                      {serviceDetails.map((service) => (
                        <li key={service.id}>
                          <Link
                            className='a'
                            href={`/services/${service.slug}`}
                          >
                            {service.heading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>

                <div
                  className="linkOnHover text-white ps-5"
                  onClick={() => setMenuOpen(!menuOpen)}
                  role="button"
                  tabIndex={0}
                >
                  Menu
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade left"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <img src={LogoDark} className="" alt="logo" />
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <nav className="navbar navbar-expand-lg mobile-menu">
                <div className="container-fluid">
                  <div className="navbar-collapse collapse show" id="navbarNav">
                    <div className="ms-auto w-100 d-flex justify-content-end menu-on-hover">
                      <ul className="navbar-nav navigation">
                        <li className="current-menu">
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li className="has-child">
                          <a
                            className=""
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Projects
                          </a>
                          <ul className="dropdown-menu submenu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Residential
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Commercial
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="has-child">
                          <a
                            className=""
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Services
                          </a>
                          <ul className="dropdown-menu submenu">
                            {serviceDetails.map((service) => (
                              <li key={service.id}>
                                <Link
                                  className='a'
                                  href={`/services/${service.slug}`}
                                >
                                  {service.heading}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
