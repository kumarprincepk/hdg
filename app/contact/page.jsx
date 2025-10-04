"use client";

import Footer from "@/components/footerSection/Footer";
import Header from "@/components/headerSection/Header";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact">
        <div className="contact-banner">
          <div className="col d-flex flex-column justify-content-center align-items-center position-relative z-2 py-5 h-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col text-center">
                  <Image
                    src="/images/logo/logo-icon.png"
                    alt="logo-image"
                    width={250}
                    height={200}
                    className="object-cover w-full"
                  />
                  <h2 className="text-white mt-4 mb-3 text-uppercase">
                    CONTACT US
                  </h2>
                  <h3 className="text-white">
                    <em>We cherish all interactions</em>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-link-banner py-5">
          <div className="container-fluid">
            <div className="row position-relative z-2">
              <div className="col-md-4">
                <div className="contact-map">
                  <h2>OUR CONTACTS</h2>
                  <div className="d-flex align-items-center h-100">
                    <a className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56055.88806164287!2d77.15092854480741!3d28.584983353358897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25a04d8f1f1%3A0xeea20a333b35542d!2sHome%20Developers%20India!5e0!3m2!1sen!2sin!4v1756556221088!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        reerrorpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="col p-0  mb-3 mb-xl-4">
                      <h4>OUR ADDRESS</h4>
                      <address className="mb-0">
                      <h4>Office</h4>
                         D - 22,
                        <br /> Defence Colony, New Delhi
                      </address>
                    </div>

                    <div className="col p-0  mb-3 mb-xl-4">
                      <h4>EMAIL US</h4>
                      <h5>Design & Build services</h5>
                      <ul className="m-0 p-0">
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                        <li>
                          <i className="icon-phone-1"></i> +91 9354940979
                        </li>
                        <li>
                          <i className="icon-phone-1"></i> +91 11-49051697
                        </li>
                      </ul>
                    </div>
                    <div className="col p-0  mb-3 mb-xl-4">
                      <h5>General Enquiries</h5>
                      <ul className="m-0 p-0">
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col p-0  mb-3 mb-xl-4">
                      <h5>Career</h5>
                      <ul className="m-0 p-0">
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                      </ul>
                    </div>

                    <div className="col p-0  mb-3 mb-xl-4">
                      <h5>Media & Press</h5>
                      <ul className="m-0 p-0">
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                      </ul>
                    </div>

                    <div className="col p-0  mb-3 mb-xl-4">
                      <h5>Vendors</h5>
                      <ul className="m-0 p-0">
                        <li>
                          <i className="icon-mail"></i>{" "}
                          info@homedevelopersgroup.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
