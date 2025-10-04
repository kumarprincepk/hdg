"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-lg-5 text-center text-lg-start">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="logo-image"
                  width={250}
                  height={50}
                  className="object-cover w-full"
                />
              </div>

              <div className="col-lg-5 offset-lg-2">
                <ul className="footer-links d-flex flex-wrap my-4 my-lg-0 justify-content-center justify-content-lg-end">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    {
                      name: "Projects",
                      href: "/projects/residential-projects",
                    },
                    { name: "Services", href: "/services/sales-collaboration" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-lg-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="row">
              <div className="col-xl-4 col-lg-6"></div>
              <div className="col-lg-6 col-xl-6 offset-xl-2">
                <ul className="social-icon justify-content-center justify-content-lg-start">
                  <li>
                    <a>
                      <i className="icon-fb"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="icon-X"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="icon-linked"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="icon-ins"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <address className="text-white mb-4">
                  D - 22, Defence Colony, <br />
                  New Delhi - 110024
                </address>
              </div>
              <div className="col-md-6">
                <p className="text-white mb-1">+91-93549-40979</p>
                <p className="text-white">info@homedevelopersgroup.com</p>
              </div>
            </div>
          </div>

          <div className="col-sm-5 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56055.88806164287!2d77.15092854480741!3d28.584983353358897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25a04d8f1f1%3A0xeea20a333b35542d!2sHome%20Developers%20India!5e0!3m2!1sen!2sin!4v1756556221088!5m2!1sen!2sin"
              className={`w-full rounded-md shadow-md`}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
              title="park-title"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="text-white fs-6 text-center text-lg-start">
              All Rights Reserved 2025
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
