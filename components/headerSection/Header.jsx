"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/style/globals.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeader = scrolled || pathname !== "/";
  const isSticky = scrolled || pathname !== "/";

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`header style2 headerSticky
          ${isSticky ? "position-fixed top-0 start-0 end-0 z-3" : "position-relative"}
          ${isDarkHeader ? "bg-black text-white shadow" : "bg-primary text-white"}
          transition
        `}
      >
        <div
          className='headerInner'
          style={{ backgroundColor: isDarkHeader ? "rgb(44 46 51)" : "transparent" }}
        >
          <div className="container-fluid d-flex flex-wrap w-100">
            <div className="w-100">
              <div className="d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className='headerLogo'>
                  <Link className={`a siteLogo`} href="/">
                    <Image
                      className='imgDefault'
                      alt="header-image"
                      src={isDarkHeader ? "/images/HDwhite.png" : "/images/HDwhite.png"}
                      width={300}
                      height={50}
                      priority
                    />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className={`headerRight d-none d-lg-flex align-items-center`}>
                  <nav className='mainMenu'>
                    <ul className={`navigation d-flex gap-2 list-unstyled m-0`}>
                      <li className='currentMenu'>
                        <Link className='a' href="/">Home</Link>
                      </li>
                      <li>
                        <Link className='a' href="/about">About</Link>
                      </li>

                      {/* Projects Dropdown */}
                      <li className={`hasChild style2 position-relative dropdown`}>
                        <Link className={`a dropdown-toggle`} href="/" data-bs-toggle="dropdown">
                          Projects
                        </Link>
                        <ul className={`submenu dropdown-menu`}>
                          <li>
                            <Link className='a' href="/">
                              <Image className='linkImg' src="/images/residential.jpg" width={300} height={200} alt="residential" />
                              Residential
                            </Link>
                          </li>
                          <li>
                            <Link className='a' href="/">
                              <Image className='linkImg' src="/images/commercial.jpg" width={300} height={200} alt="commercial" />
                              Commercial
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Services Dropdown */}
                      <li className={`hasChild style2 position-relative dropdown`}>
                        <Link className={`a dropdown-toggle`} href="/" data-bs-toggle="dropdown">
                          Services 
                        </Link>
                        <ul className={`submenu dropdown-menu`}>
                          <li><Link className='a' href="/">Sales &amp; Collaboration</Link></li>
                          <li><Link className='a' href="/">Interior Design</Link></li>
                          <li><Link className='a' href="/">Turnkey Execution</Link></li>
                          <li><Link className='a' href="/">Commercial Leasing</Link></li>
                          <li><Link className='a' href="/">Building Management</Link></li>
                        </ul>
                      </li>

                      <li>
                        <Link className='a' href="/">Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  <div className={`boxUser linkOnHover ms-4`}>
                    <div className={`name text-white`}>Menu</div>
                  </div>
                </div>

                {/* Mobile Menu Button (Offcanvas trigger) */}
                <div
                  className={`mobileButton d-lg-none cursor-pointer`}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobileMenu"
                  aria-controls="mobileMenu"
                  aria-label="Open menu"
                >
                  <i className="icon-menu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu (Bootstrap Offcanvas) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        {/* Mobile Header */}
        <div className="offcanvas-header">
          <div className='offcanvasLitle'>
            <Link className='a' href="/">
              <Image src="/images/logo.png" alt="logo" width={150} height={50} />
            </Link>
          </div>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        {/* Mobile Menu Body */}
        <div className="offcanvas-body">
          <ul className="list-unstyled" id='menuMobileMenu'>
            <li><Link className={`a itemMenuMobile`} href="/">Home</Link></li>
            <li><Link className={`a itemMenuMobile`} href="/about">About</Link></li>

            {/* Projects Submenu (Bootstrap Collapse) */}
            <li>
              <button
                className={`itemMenuMobile w-100 text-start btn btn-link p-0`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseProjects"
                aria-expanded="false"
                aria-controls="collapseProjects"
              >
                Projects
              </button>
              <div className="collapse" id="collapseProjects">
                <ul className={`subMobile ps-3 mt-2 list-unstyled`}>
                  <li><Link className='a' href="/">Residential</Link></li>
                  <li><Link className='a' href="/">Commercial</Link></li>
                </ul>
              </div>
            </li>

            {/* Services Submenu (Bootstrap Collapse) */}
            <li>
              <button
                className={`itemMenuMobile w-100 text-start btn btn-link p-0`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseServices"
                aria-expanded="false"
                aria-controls="collapseServices"
              >
                Services
              </button>
              <div className="collapse" id="collapseServices">
                <ul className={`subMobile ps-3 mt-2 list-unstyled`}>
                  <li><Link className='a' href="/">Sales &amp; Collaboration</Link></li>
                  <li><Link className='a' href="/">Interior Design</Link></li>
                  <li><Link className='a' href="/">Turnkey Execution</Link></li>
                  <li><Link className='a' href="/">Commercial Leasing</Link></li>
                  <li><Link className='a' href="/">Building Management</Link></li>
                </ul>
              </div>
            </li>

            <li><Link className={`a itemMenuMobile`} href="/">Contact</Link></li>
          </ul>

          {/* Support Info */}
          <div className={`support mt-4`}>
            <Link className={`a textNeed`} href="/">Need help?</Link>
            <ul className={`mbInfo mt-2 list-unstyled`}>
              <li>Call Us Now: <span className="number">91932-56985</span></li>
              <li>Support 24/7: <Link className='a' href="/">info@homedevelopersgroup.com</Link></li>
              <li>
                <div className='wrapSocial'>
                  <p>Follow us:</p>
                  <ul className={`tfSocial style2 d-flex gap-2 list-unstyled`}>
                    <li><Link className='a' href="/"><i className="icon-fb"></i></Link></li>
                    <li><Link className='a' href="/"><i className="icon-X"></i></Link></li>
                    <li><Link className='a' href="/"><i className="icon-linked"></i></Link></li>
                    <li><Link className='a' href="/"><i className="icon-ins"></i></Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
