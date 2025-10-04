"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import serviceDetails from "@/public/data/pageInfo";
import Link from "next/link";
import Image from "next/image";
import projectInfo from "@/public/data/projectInfo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
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
  }, [pathname]);

  const isHome = pathname === "/";
  return (
    <>
      <header className={`header-sticky 
          ${isHome && !isSticky ? "transparent-header" : "is-sticky"}
        `}>
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <div className="position-relative w-100 d-flex justify-content-between">
              <a className="navbar-brand" href="#">
                <Image
                  src="/images/logo/HDwhite.png"
                  alt="logo - hdg"
                  height={200}
                  width={200}
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="ms-auto d-flex justify-content-end menu-on-hover">
                  <ul className="navbar-nav navigation me-lg-5">
                    <li className="current-menu">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-child submenu-full">
                      <Link href="/">Projects</Link>
                      <ul className="submenu">
                        {projectInfo.map((project) => (
                          <li key={project.id}>
                            <ul className="submenu2">
                              <li>
                                <Link href={`/projects/${project?.slug}`}>
                                  <Image
                                    src={project?.image}
                                    width={635}
                                    height={350}
                                    alt={project?.heading}
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link href={`/projects/${project?.slug}`}>
                              {project.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-child ">
                      <a href="#">Services</a>
                      <ul className="submenu">
                        {serviceDetails.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="a"
                              href={`/services/${service.slug}`}
                            >
                              {service.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div
                    className="linkOnHover text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={0}
                  >
                    Menu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <header className="">
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container-fluid">
            <div className="position-relative w-100 d-flex justify-content-between">
              <a className="navbar-brand" href="#">
                {/* <img src='/images/logo/logo-dark.png' className="" alt="logo" />
                <img src='/images/logo/logo-white.png' className="" alt="logo" /> */}
                <Image
                  src="/images/logo/HDwhite.png"
                  alt="logo Image"
                  height={250}
                  width={200}
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="ms-auto d-flex justify-content-end menu-on-hover">
                  <ul className="navbar-nav navigation me-lg-5">
                    <li className="current-menu">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-child submenu-full">
                      <Link href="/">Projects</Link>
                      <ul className="submenu">
                        {projectInfo.map((project) => (
                          <li key={project.id}>
                            <ul className="submenu2">
                              <li>
                                <Link href={`/projects/${project?.slug}`}>
                                  <Image
                                    src={project?.image}
                                    width={635}
                                    height={350}
                                    alt={project?.heading}
                                  />
                                </Link>
                              </li>
                            </ul>
                            <Link href={`/projects/${project?.slug}`}>
                              {project.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="has-child ">
                      <a href="#">Services</a>
                      <ul className="submenu">
                        {serviceDetails.map((service) => (
                          <li key={service.id}>
                            <Link
                              className="a"
                              href={`/services/${service.slug}`}
                            >
                              {service.heading}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>

                  <div
                    className="linkOnHover text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    role="button"
                    tabIndex={0}
                  >
                    Menu
                  </div>
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
                <img src="/images/logo/logo-dark.png" className="" alt="logo" />
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
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li className="has-child">
                          Projects
                          <ul className="dropdown-menu submenu">
                            {projectInfo.map((project,index) => (
                              <li key={index}>
                                <Link
                                  className="dropdown-item"
                                  href={`/projects/${project?.slug}`}
                                >
                                  {project.heading}
                                </Link>
                              </li>
                            ))}
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
                                  className="a"
                                  href={`/services/${service.slug}`}
                                >
                                  {service.heading}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li>
                          <Link href="/contact">Contact</Link>
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
